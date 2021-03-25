import React from 'react'
import "../assets/css/Products.css";

// function Product(props) {
//     console.log(props)
//     const { id, title, rating, price } = props;
//     return (
//         <div className="product">
//            <p>{title}</p>
//         </div>
//     )
// }

function Product({id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__name">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating).fill().map((_) =>(
                        <p>*</p>
                    ))
                }
            </div>
            <img src={image} alt="product" />
        </div>
    )
}

export default Product
