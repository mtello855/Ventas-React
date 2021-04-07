import React from "react";
import "./Addtocart.css";

function Addtocard(props) {
  return (
    <div>
      <button
        className="addToCard"
        onClick={() => props.setCart([...props.itemCart, props.itemC])}
      >
        {" "}
        ADD TO CART &#128722;
      </button>
    </div>
  );
}
export default Addtocard;
