import React, { useState } from "react";
import "./Section.css";
import Casco from "../../Img/casco.jpg";
import Aceite from "../../Img/aceite.jpg";
import Baul from "../../Img/baul.jpg";
import OtroCasco from "../../Img/otrocasco.jpg";
import Rueda from "../../Img/rueda.png";
import Vidrio from "../../Img/vidrio.jpg";

const productCards = [
  {
    img: Casco,
    desc: "Antiparras superpuestas",
  },
  { img: Aceite, desc: "Aceite 2 tiempos" },
  { img: Baul, desc: "Especial repartidores" },
  { img: OtroCasco, desc: "Especial repartidores" },
  { img: Rueda, desc: "Especial repartidores" },
  { img: Vidrio, desc: "Especial repartidores" },
];

function Section() {
  const [testHook, setTestHook] = useState(0);
  return (
    <div className="cardsGrid">
      {productCards.map((e, i) => {
        console.log(i);
        return (
          <div className="card-product">
            <h2>Product Card</h2>
            <div className="card">
              <img className="img-Card" src={e.img} />
              <h1>Tailored Jeans</h1>
              <p className="price">$19.99</p>
              <p className="descriptionCard">{e.desc}</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section;
