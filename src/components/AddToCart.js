import React, { useState } from "react";

const AddToCart = props => {
  const [qty, setQty] = useState(1);
  const { productId, userId } = props;
  console.log(props);

  const handleClick = e => {
    e.preventDefault();
    console.log(productId);
    props.addToCartThunk(qty, productId, userId);
  };
  return (
    <form>
      <label htmlFor="qty">Qty:</label>
      <input
        name="qty"
        type="number"
        min="1"
        value={qty}
        onChange={e => setQty(e.target.value)}
      />
      <button
        style={{ width: "20px", height: "20px", backgroundColor: "yellow" }}
        onClick={handleClick}
      ></button>
    </form>
  );
};

export default AddToCart;
