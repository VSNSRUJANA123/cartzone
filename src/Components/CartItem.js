import React, { useState } from "react";

import Format from "../Helpers/Format";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const [quantity, setQuantity] = useState(1);
  const { removeItem, cart, setDecrease, setIncrease } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <p>{name}</p>
        <div className="color-div">
          <p>color:</p>
          <div
            className="color-style"
            style={{ backgroundColor: color, color: color }}
          ></div>
        </div>
      </div>
      {/* price */}
      <div className="cart-hide">
        <p>
          <Format price={price} />
        </p>
      </div>
      {/* quantity */}
      <div className="cart-button">
        <div className="amount-toggle">
          <button onClick={() => setDecrease(id)}>
            <FaMinus />
          </button>
          <div className="amount-style">{amount} </div>
          <button onClick={() => setIncrease(id)}>
            <FaPlus />
          </button>
        </div>
      </div>
      {/* subtotal */}
      <div className="cart-hide">
        <p>
          <Format price={price * amount} />
        </p>
      </div>
      {/* remove cart*/}
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
