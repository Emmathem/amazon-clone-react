import React from "react";
import "../assets/css/Products.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../store/StateProvider";

function Product(props) {
  const { id, title, image, price, rating } = props;

  const [{}, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div key={id} className="product">
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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
