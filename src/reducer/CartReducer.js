import CartItem from "../Components/CartItem";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;
      let existingProduct = state.cart.find(
        (currItem) => currItem.id === id + color
      );
      if (existingProduct) {
        let updateProject = state.cart.map((currItem) => {
          if (currItem.id === id + color) {
            let newAmount = currItem.amount + amount;
            if (newAmount >= currItem.max) {
              newAmount = currItem.max;
            }
            return {
              ...currItem,
              amount: newAmount,
            };
          } else {
            return currItem;
          }
        });
        return {
          ...state,
          cart: updateProject,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          amount,
          product,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_ITEM":
      let updateCart = state.cart.filter((curItem) => {
        return curItem.id !== action.payload;
      });
      return { ...state, cart: updateCart };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "DECREMENT":
      let updateProduct = state.cart.map((currItem) => {
        if (currItem.id === action.payload) {
          let decAmount = currItem.amount - 1;
          if (decAmount <= 1) {
            decAmount = 1;
          }
          return { ...currItem, amount: decAmount };
        } else {
          return currItem;
        }
      });
      return { ...state, cart: updateProduct };
    case "INCREMENT":
      let updateProduct1 = state.cart.map((currItem) => {
        if (currItem.id === action.payload) {
          let decAmount = currItem.amount + 1;
          if (decAmount > currItem.max) {
            decAmount = currItem.max;
          }
          return { ...currItem, amount: decAmount };
        } else {
          return currItem;
        }
      });
      return { ...state, cart: updateProduct1 };
    case "CART_TOTAL_ITEM":
      let updateItemVal = state.cart.reduce((initialVal, currItem) => {
        let { amount } = currItem;
        initialVal = initialVal + amount;
        return initialVal;
      }, 0);
      return { ...state, total_item: updateItemVal };
    case "CART_TOTAL_PRICE":
      let updateItemPrice = state.cart.reduce((initialVal, currItem) => {
        let { price, amount } = currItem;
        initialVal = initialVal + price * amount;
        return initialVal;
      }, 0);
      return { ...state, total_amount: updateItemPrice };
    default:
      return { ...state };
  }
};
export default cartReducer;
