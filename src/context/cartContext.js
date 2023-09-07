import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from "../reducer/CartReducer";
const getLocalStorage = () => {
  let cart_items = JSON.parse(localStorage.getItem("cartZone"));
  if (cart_items === null) {
    return [];
  } else {
    return cart_items;
  }
};
const initialState = {
  cart: getLocalStorage(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const setIncrease = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };
  const setDecrease = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("cartZone", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
