import React from "react";
import "./Section.css";
import Casco from "../../Img/casco.jpg";

const cascoCard = Casco;

function Section() {
  return (
    <div className="card-product">
      <h2>Product Card</h2>
      <div className="card">
        <img className="img-Card" src={cascoCard} />
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>
          Some text about the jeans. Super slim and comfy lorem ipsum lorem
          jeansum. Lorem jeamsun denim lorem jeansum.
        </p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  );
}

export default Section;
