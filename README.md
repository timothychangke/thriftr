
# Welcome to 'thriftr' - The Ultimate Virtual Thrifting Experience! 🛍️✨



https://github.com/timothychangke/thriftr/assets/101695218/36b11e4a-796a-4319-8417-a52936133bc8


try it out: https://thriftr.vercel.app

## Introduction

🚀 Embark on a Thrifting Revolution with 'thriftr' at the HacknRoll Hackathon! Say goodbye to the days of trekking to ulu and spending endless hours sifting through mountains of clothes. 🌟

Introducing 'thriftr' - the Tinder for Clothes! We are here to bring the joy of thrifting directly to your fingertips 🛍️ Swipe your way through a thrilling virtual thrifting experience, right from the comfort of your own home. No more sore eyes, tired hands, or aching shoulders! 🏡✨

## Features 🌈

### Swipe and Shop
Experience the thrill of 'thriftr' - the Tinder for Clothes! 📱 Swipe your way through a curated selection of clothes, discovering hidden gems effortlessly.

### Virtual Fitting Room
No more guesswork on fit! 'thriftr' introduces personalized avatars customized to your unique measurements. Trying on clothes virtually has never been this easy! 👗👤

### AI Recommendations
Our cutting-edge artificial intelligence learns from your preferences, recommending items similar to your past purchases. Enjoy a personalized shopping experience like never before! 🤖💡

### We're currently in the implementation phase, working on exciting features to enhance your 'thriftr' experience. Stay tuned for:

Even More Immersive Thrifting: We're adding features to make your virtual thrifting experience more immersive and exciting.
Personalized Suggestions: Fine-tuning our AI for even more accurate and personalized recommendations.
User-Friendly Interface: We're committed to providing a seamless and user-friendly interface for an enjoyable thrifting journey.

## Technical Details ⚙️

We built an autoencoder using PyTorch and the (clothes dataset)[https://www.kaggle.com/datasets/agrigorev/clothing-dataset-full] in Kaggle. 
The model architecture can be found in src/backend/Data/model.py
Using the trained encoder, we decided to encode the images in our database and recommend new clothes to users via calculating the cosine similarity. 
User's preference/taste would be slowly averaged out with the clothes he/she choose to swipe right on. 

All of this happens using Flask and calculated data is sent to our database, firebase. 

## How to Get Started

### Clone the Repository:

```bash
git clone https://github.com/your-username/thriftr.git
```

### Install all of the dependencies by running:

```bash
npm i
```

### Then, to run the server:

```bash
npm start
```
Get ready to revolutionize your wardrobe with 'thriftr' – where the joy of thrifting meets the convenience of technology! 🚀🛒 #HacknRoll #ThriftingRevolution #SwipeAndShop #ComingSoon
