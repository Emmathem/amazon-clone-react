import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import "../assets/css/Chekout.css";
import { useStateValue } from "../store/StateProvider";

export const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASET",
      item: {
        id: id,
      },
    });
  };
  
  return (
    <div key={id} className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title"> {title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarRateIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};
