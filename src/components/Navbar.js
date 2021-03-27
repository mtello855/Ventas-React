import React from "react";
import { Link } from "react-router-dom";
import logoCiro from "../logo.png";
import Cart from "./Cart/Cart";

function Navbar() {
  return (
    <div className="main">
      <div>
        <img className="Logo" src={logoCiro} />
      </div>
      <Link to="/">HOME</Link>
      <Link to="/gallery">ACCESORIOS</Link>
      <Link to="/gallery">ACEITES</Link>
      <Link to="/gallery">CASCOS</Link>
      <Link to="/gallery">ESCAPES</Link>
      <div>
        <Cart />
      </div>
    </div>
  );
}
export default Navbar;
