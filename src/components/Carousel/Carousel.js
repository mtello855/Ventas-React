import React, { useState } from "react";
import "./Carousel.css";
import Casco from "../../Img/casco.jpg";
import Aceite from "../../Img/aceite.jpg";
import Baul from "../../Img/baul.jpg";
import OtroCasco from "../../Img/otrocasco.jpg";
import Rueda from "../../Img/rueda.png";
import Vidrio from "../../Img/vidrio.jpg";

function Carousel() {
  const product = [
    {
      img: Casco,
      desc: "Antiparras superpuestas, desmontables, diferentes colores",
    },
    { img: Aceite, desc: "Aceite 2 tiempos" },
    { img: Baul, desc: "Especial repartidores" },
    { img: OtroCasco, desc: "Especial repartidores" },
    { img: Rueda, desc: "Especial repartidores" },
    { img: Vidrio, desc: "Especial repartidores" },
  ];
  const [slideIndex, setSlide] = useState(1);

  return (
    <div>
      {product.map((e, i) => {
        if (slideIndex === i + 1) {
          return (
            <div className="carousel">
              <div className="descrption-p">
                <p>{e.desc}</p>
              </div>
              <img className="img-prod-carousel" src={e.img} />
            </div>
          );
        }
      })}
      <div className="container">
        <div className="caption-container">
          <p id="caption">Nombre del Producto</p>
        </div>
        <div className="row">
          <div className="column">
            <img
              className="img-prod"
              src={Casco}
              onClick={() => setSlide(1)}
              alt="The Woods"
            />
          </div>
          <div className="column">
            <img
              className="img-prod"
              src={Aceite}
              onClick={() => setSlide(2)}
              alt="Cinque Terre"
            />
          </div>
          <div className="column">
            <img
              className="img-prod"
              src={Baul}
              onClick={() => setSlide(3)}
              alt="Mountains and fjords"
            />
          </div>
          <div className="column">
            <img
              className="img-prod"
              src={OtroCasco}
              onClick={() => setSlide(4)}
              alt="Northern Lights"
            />
          </div>
          <div className="column">
            <img
              className="img-prod"
              src={Rueda}
              onClick={() => setSlide(5)}
              alt="Nature and sunrise"
            />
          </div>
          <div className="column">
            <img
              className="img-prod"
              src={Vidrio}
              onClick={() => setSlide(6)}
              alt="Snowy Mountains"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
