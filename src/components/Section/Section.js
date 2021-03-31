import React, { useState } from "react";
import "./Section.css";
import SeeDetails from "./../SeeDetails/SeeDetails";

function Section(props) {
  return (
    <div className="cardsGrid">
      {props?.itemData.map((e, i) => {
        return (
          <div className="card-product">
            <div className="card">
              <img className="img-Card" src={e.image} />
              <h1>{e.name}</h1>
              <p className="price">${e.value}</p>
              <p className="descriptionCard">{e.descripcion}</p>
              <p>
                <SeeDetails id={e.id} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Section;
