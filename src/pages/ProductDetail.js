import { useParams, useLoaderData } from 'react-router-dom';
import database from '../firebase';

function ProductDetailPage() {
    const product = useLoaderData();
    return (
        <>
            <main>
                <h1>This is the detail of Product </h1>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.url}</p>
                <p>{product.size}</p>
            </main>
        </>
    );
}

export default ProductDetailPage;

export async function loader({ request, params }) {
    let matched;
    console.log(params.productName);
    database
        .collection('clothes')
        .where('name', '==', params.productName)
        .get()
        .then((querySnapshot) => {
            matched = querySnapshot.doc[0];
        });
    if (matched) {
        return matched;
    }
}
