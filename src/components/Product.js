import React from "react";
import "../assets/css/Products.css";
import StarRateIcon from "@material-ui/icons/StarRate";

// function Product(props) {
//     console.log(props)
//     const { id, title, rating, price } = props;
//     return (
//         <div className="product">
//            <p>{title}</p>
//         </div>
//     )
// }

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarRateIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
