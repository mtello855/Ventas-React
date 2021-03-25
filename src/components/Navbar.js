import React from "react";
import { Link } from "react-router-dom";
import logoCiro from "../logo.png";
function Navbar() {
  return (
    <div className="main">
      <div>
        <img className="Logo" src={logoCiro} />
      </div>
      <Link to="/">HOME</Link>
      <Link to="/accesorios">ACCESORIOS</Link>
      <Link to="#">ACEITES</Link>
      <Link to="#">CASCOS</Link>
      <Link to="#">ESCAPES</Link>
      <div>
        <a className="cart" to="#">
          {" "}
          &#128722;{" "}
        </a>
      </div>
    </div>
  );
}
export default Navbar;
