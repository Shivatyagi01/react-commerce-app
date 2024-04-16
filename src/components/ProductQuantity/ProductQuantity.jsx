import React, { useState } from "react";

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div
      className="quantityInput"
      style={{ display: "flex" }}
    >
      <button
        onClick={handleDecrease} type="button"
        style={{ border: "none", background: "#f5f5f5" }}
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        min="1"
        style={{
          width: "50px",
          height: "40px",
          background: "#f5f5f5",
          border: "none",
          textAlign: "center",
        }}
      />
      <button
        onClick={handleIncrease} type="button"
        style={{ border: "none", background: "#f5f5f5" }}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
