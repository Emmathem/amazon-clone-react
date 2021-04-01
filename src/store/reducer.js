export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      localStorage.setItem("cart", JSON.stringify(state.basket));
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // logic to remove item from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.item.id === action.item.id
      );
      if (index >= 0) {
        //item exists
        newBasket.splice(index, 1);
      } else {
        throw new Error(
          `Cant remove product with ${action.item.id} as its not in the basket`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
