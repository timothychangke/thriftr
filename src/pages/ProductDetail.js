import { useParams } from "react-router-dom"

function ProductDetailPage() {
    const params = useParams()
    return(
        <>
        <main>
            <h1>This is the detail of Product </h1>
            <p>{params.productId}</p>
        </main>
        </>
        
    )
}

export default ProductDetailPage