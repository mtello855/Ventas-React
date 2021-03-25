import React, { useState } from "react";
import "./Accesorios.css";

import Casco from "../../Img/casco.jpg";
import Aceite from "../../Img/aceite.jpg";
import Baul from "../../Img/baul.jpg";
import OtroCasco from "../../Img/otrocasco.jpg";
import Rueda from "../../Img/rueda.png";
import Vidrio from "../../Img/vidrio.jpg";
import { Link } from "react-router-dom";

const productCards = [
  {
    img: Casco,
    desc: "Antiparras ",
  },
  { img: Aceite, desc: "Aceite 2 tiempos" },
  { img: Baul, desc: "Especial repartidores" },
  { img: OtroCasco, desc: "Especial repartidores" },
  { img: Rueda, desc: "Especial repartidores" },
  { img: Vidrio, desc: "Especial repartidores" },
];

function Accesorios() {
  const [testHook, setTestHook] = useState(0);
  return (
    <div className="galleryAcces">
      {productCards.map((e, i) => {
        return (
          <div className="gallery">
            <Link to="/product" target="_blank" href="img_5terre.jpg">
              <img src={e.img} />
            </Link>
            <div className="desc">{e.desc}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Accesorios;
