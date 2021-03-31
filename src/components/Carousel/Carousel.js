import React, { useState } from "react";
import "./Carousel.css";
import SeeDetails from "./../SeeDetails/SeeDetails";

function Carousel(props) {
  const [slideIndex, setSlide] = useState(1);

  return (
    <div>
      {props?.itemData.map((e, i) => {
        if (slideIndex === i + 1) {
          return (
            <div className="carousel">
              <div className="descrption-p">
                <h1>{e.name}</h1>
                <p>{e.descripcion}</p>
                <p className="price">${e.value}</p>
                <footer>
                  <SeeDetails id={e.id} />
                </footer>
              </div>
              <img className="img-prod-carousel" src={e.image} />
            </div>
          );
        }
      })}
      <div className="container">
        <div className="caption-container">
          <p id="caption">Nombre del Producto</p>
        </div>
        <div className="row">
          {props?.itemData.map((e, i) => {
            return (
              <div className="column">
                <img
                  className="img-prod"
                  src={e.image}
                  onClick={() => setSlide(i + 1)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Carousel;
