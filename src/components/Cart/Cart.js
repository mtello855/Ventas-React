import React from "react";
import "./Cart.css";

function Cart(props) {
  console.log(props);
  const { itemCart } = props;

  return (
    <div className="dropdown">
      <div className="cart"> &#128722; </div>
      <div className="dropdown-content">
        <p className="myCart">My Cart</p>
        <hr className="hrCart" />
        {props?.itemCart.map((e, i) => {
          return (
            <div className="productPrePurchase">
              <img className="imgPrePurchase" src={e.image} />
              <div className="descriptionProd">
                <h1>{e.name}</h1>
                <p>Code: 95585</p>
                <p>Quantity = </p>
                <p>$ {e.value}</p>
              </div>
            </div>
          );
        })}
        <hr className="hrCart" />
        <div className="btnsDropdown">
          <button className="btnsD">Continue Buying</button>
          <button className="btnsD">Go to Cart</button>
          <button className="btnsD">Empty Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Cart;

/*props.itemCart.filter((e,i)=> props.itemCart.indexOf(e) != i)
 */
