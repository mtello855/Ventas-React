import React from "react";
import "./Addtocart.css";

function Addtocard(props) {
  const addItem = () => {
    if (props?.itemCart?.length > 0) {
      const newArr = props?.itemCart.filter((e) => {
        if (e.id === props?.itemC?.id) {
          if (e?.quantity > 0) {
            return { ...e, quantity: e.quantity + 1 };
          } else {
            return { ...e, quantity: 1 };
          }
        }
      });
      props.setCart([...props.itemCart, newArr]);
    } else {
      props.setCart([...props.itemCart, { ...props.itemC, quantity: 1 }]);
    }

    console.log(props.itemCart);
  };
  return (
    <div>
      <button className="addToCard" onClick={() => addItem()}>
        {" "}
        ADD TO CART &#128722;
      </button>
    </div>
  );
}
export default Addtocard;
// props.setCart([...props.itemCart, props.itemC]),
