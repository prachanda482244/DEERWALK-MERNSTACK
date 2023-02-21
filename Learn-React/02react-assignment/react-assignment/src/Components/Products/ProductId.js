import React from 'react'
import { useParams } from 'react-router-dom'

const ProductId = () => {
    const params = useParams()
    return (
        <div>
            Product id: {params.productId}
        </div>
    )
}

export default ProductId
