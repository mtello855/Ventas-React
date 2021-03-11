import React from "react";
import logoCiro from "../logo.png";
function Navbar() {
  return (
    <div className="main">
      <div>
        <img className="Logo" src={logoCiro} />
      </div>
      <a href="#">HOME</a>
      <a href="#">ACCESORIOS</a>
      <a href="#">ACEITES</a>
      <a href="#">CASCOS</a>
      <a href="#">ESCAPES</a>
      <div>
        <a className="cart" href="#">
          {" "}
          &#128722;{" "}
        </a>
      </div>
    </div>
  );
}
export default Navbar;
