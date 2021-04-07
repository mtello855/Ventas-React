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
            <Link to={`/product?${e.id}`}>
              <img src={e.image} />
            </Link>
            <div className="desc">{e.descripcion}</div>
            <div className="addTCgallery">
              <Addtocard
                itemCart={props.itemCart}
                itemC={e}
                setCart={props.setCart}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryProducts;
