import React from "react";
import "./Product.css";
import Select from "../Select/Select";
import Addtocard from "../AddToCart/Addtocart";
import Stock from "./../Stock/Stock";
import Baul from "../../Img/baul.jpg";
import logoCiro from "../../../src/logo.png";
import Visa from "../../Img/visa-logo.png";
import MasterC from "../../Img/mastercard-logo.png";
import AmericanE from "../../Img/American-Express.png";

function Product() {
  return (
    <div>
      <div className="productPrePurchase">
        <div>
          <img className="imgProd" src={Baul} />
        </div>
        <div className="descriptionProd">
          <h1>Baul</h1>
          <p>Especial Repartidoes</p>
          <p>Code: 95585</p>
          <Stock />
        </div>
        <div className="PrePurchase">
          <img className="logoPP" src={logoCiro} />
          <hr />
          <p className="priceProduct">$9.800</p>
          <hr className="hrPrice" />
          <div className="methodPayment">
            <p>Paying with</p>
            <div className="iconsCards">
              <img className="imgPaymentMethod" src={Visa} />
              <img className="imgPaymentMethod" src={MasterC} />
              <img className="imgPaymentMethod" src={AmericanE} />
            </div>
          </div>
          <hr />
          <div className="quantity">
            <p>Quantity : </p> <Select /> <Addtocard />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Product;
