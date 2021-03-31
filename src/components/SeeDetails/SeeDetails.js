import React from "react";
import { Link } from "react-router-dom";
import "./SeeDetails.css";

function SeeDetails(props) {
  return (
    <div className="btnSeeDetails">
      <Link to={`/product?${props.id}`}>
        <button className="seeDetails"> SEE DETAILS</button>
      </Link>
    </div>
  );
}
export default SeeDetails;
