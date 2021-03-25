import React from "react";
import "./Product.css";
import Baul from "../../Img/baul.jpg";
import logoCiro from "../../../src/logo.png";

function Product() {
  return (
    <div className="productPrePurchase">
      <div className="imgProd">
        <img src={Baul} />
      </div>
      <div className="descriptionProd">
        <h1>Baul</h1>
        <p>Especial Repartidoes</p>
        <p>Code: 95585</p>
      </div>
      <div className="PrePurchase">
        <img className="logoPP" src={logoCiro} />
        <hr />
        <h2>$9.800</h2>
        <hr />
        <h3>Paying with</h3>
        <hr />
        <p>Quantity</p>
      </div>
    </div>
  );
}
export default Product;
