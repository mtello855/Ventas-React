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

function Product(props) {
  return (
    <div>
      {props?.itemData.map((e, i) => {
        if (e.id === parseInt(window.location.search.substring(1))) {
          
          return (
            <div className="productPrePurchase">
              <div>
                <img className="imgProd" src={e.image} />
              </div>
              <div className="descriptionProd">
                <h1>{e.name}</h1>
                <p>{e.descripcion}</p>
                <p>Code: 95585</p>
                <Stock />
              </div>
              <div className="PrePurchase">
                <img className="logoPP" src={logoCiro} />
                <hr />
                <p className="priceProduct">${e.value}</p>
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
          );
        }
      })}
      <hr />
    </div>
  );
}
export default Product;
