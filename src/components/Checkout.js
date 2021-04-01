import React from "react";
import { useStateValue } from "../store/StateProvider";
import "../assets/css/Chekout.css";
import { CheckoutProduct } from "./CheckoutProduct";

export const Checkout = () => {
  const [{ basket }] = useStateValue();
//   const getCart = localStorage.getItem('cart');
//   const basket = JSON.parse(getCart);
//   console.log(basket, 'checkout');
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/"
        alt="checkout"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no item in your basket. To buy one, click on "Add to
            Basket" next to the item
          </p>
        </div>
      ) : (
        <div>
          <h2>Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
};
