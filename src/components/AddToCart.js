import React, { useState } from "react";

const AddToCart = props => {
  const [qty, setQty] = useState(0);
  const { productId, cartId, userId } = props;
  return (
    <form>
      <label htmlFor="qty">Qty:</label>
      <input name="qty" type="number" min="1" value={qty} onChange={setQty} />
      <button
        onClick={props.addToCartThunk(cartId, qty, productId, userId)}
      ></button>
    </form>
  );
};

export default AddToCart;
