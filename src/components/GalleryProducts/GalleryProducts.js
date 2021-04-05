import React, { useState } from "react";
import "./GalleryProducts.css";
import { Link } from "react-router-dom";
import Addtocard from "../AddToCart/Addtocart";

function GalleryProducts(props) {
  const [testHook, setTestHook] = useState(0);
  return (
    <div className="galleryAcces">
      {props?.itemData.map((e, i) => {
        return (
          <div className="gallery">
            <Link to={`/product?${props.id}`}>
              <img src={e.image} />
            </Link>
            <div className="desc">{e.descripcion}</div>
            <div className="addTCgallery">
              <Addtocard />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryProducts;
