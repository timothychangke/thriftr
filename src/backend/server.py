from PIL import Image
import numpy as np
import torch 
from torchvision import transforms
import torchvision.transforms as T 
import numpy as np
from numpy.linalg import norm
import requests
from io import BytesIO
import firebase_admin
from firebase_admin import credentials, db, firestore
import time
from model import Encoder
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app
# Initialize Flask App
app = Flask(__name__)

 # Firebase accessing
cred = credentials.Certificate('./model_server/Data/API.json')

print("Connecting...")
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()
print("Connected!")
print("====================")

# Predicting
trans = transforms.Compose([
        transforms.Resize((256, 256)),
        #transforms.CenterCrop(256),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])

def predict(image):
    encoder = Encoder(encoded_space_dim=256,fc2_input_dim=128)
    encoder.load_state_dict(torch.load('./model_server/Data/encoder_save.pth', map_location=torch.device('cpu')))
    encoder.eval()
    encoding = torch.squeeze(encoder(trans(image).unsqueeze(0)),0)
    return encoding

# Calculating cosine similarity
def cosine(A, B):
    cosine = abs(np.dot(A,B)/(norm(A)*norm(B)))
    return cosine

# Updating all clothes with their encoding in the firebase database
def update(users_ref):
    docs = users_ref.stream()
    for doc in docs:
        url = doc.to_dict()['url']
        response = requests.get(url)
        img = Image.open(BytesIO(response.content))
        encoding = predict(img)
        doc_ref = db.collection("clothes").document(doc.id)
        doc_ref.update({"encoding": encoding.detach().numpy().tolist()})

@app.route('/run', methods=['GET'])
def main():

    users_ref = db.collection("clothes")

    # Update whole data's image with respective encoding (when new images are added into)
    #update(users_ref = users_ref)

    docs = users_ref.stream()
    # Obtain encoding of specific image - possibily the image user chose
    """for doc in docs:
        if doc.id == 'LDtXwhvNFm55SMDzbRvT':
            print("Found it!")
            print("====================")
            subject_encoding = doc.to_dict()['encoding']
            db.collection("cart").document(doc.id).set(doc.to_dict())"""

    # Obtaining averaged encoding of user's preference (clothes in cart)
    cart_ref = db.collection('cart')
    cart_docs = cart_ref.stream()
    user_preference = 0
    count = 0
    start_time = time.time()
    for cart in cart_docs:
        if count != 0:
            user_preference += np.array(cart.to_dict()['encoding'])
        elif count == 0:
            user_preference = np.array(cart.to_dict()['encoding'])
        count += 1
    user_preference/=count
    user_preference = list(user_preference)
    print("Obtaining user's preference encoding took %s seconds" % (time.time() - start_time))
    print("====================")

    # Comparing with all clothes in database and labelling rank to them
    print("Comparing....")
    print("====================")

    start_time = time.time() # Calculating time taken

    cosine_sim_dict = {}
    docs = users_ref.stream()
    for doc in docs:
        # Calculating cosine similarity
        encoding = doc.to_dict()['encoding']
        c = cosine(encoding, user_preference)
        cosine_sim_dict[doc.id] = c

    # Sort the cosine array
    cosine_sim_dict = sorted(cosine_sim_dict.items(), key=lambda x:-1*x[1])
    cosine_sim_dict = list(dict(cosine_sim_dict).keys())
    # Assign ranks to the clothes
    docs = users_ref.stream()
    for doc in docs:
        rank = cosine_sim_dict.index(doc.id)
        doc_ref = db.collection("clothes").document(doc.id)
        doc_ref.update({"rank": rank})

    print("Comparing clothes and ranking took %s seconds" % (time.time() - start_time))
    print(cosine_sim_dict)
    return "Works"

if __name__ == "__main__":
    app.run()