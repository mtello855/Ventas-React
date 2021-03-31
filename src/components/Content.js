import React from "react";
import Section from "./Section/Section";
import Carousel from "./Carousel/Carousel";

function Content(props) {
  return (
    <div>
      <Carousel itemData={props.itemData} />
      <Section itemData={props.itemData} />
    </div>
  );
}
export default Content;
