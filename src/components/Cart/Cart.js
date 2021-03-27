import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import OtroCasco from "./../../Img/otrocasco.jpg";

function Cart() {
  return (
    <div className="dropdown">
      <Link className="cart" to="#">
        {" "}
        &#128722;{" "}
      </Link>
      <div className="dropdown-content">
        <p className="myCart">My Cart</p>
        <hr className="hrCart" />
        <div className="productPrePurchase">
          <img className="imgPrePurchase" src={OtroCasco} />
          <div className="descriptionProd">
            <h1>Baul</h1>
            <p>Especial Repartidoes</p>
            <p>Code: 95585</p>
            <p>Price : $9.800</p>
          </div>
        </div>
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
