import React from "react";
import "./styles.css";

const Marker = ({ text, selected }) => (
  <p className={selected ? "Marker Marker--selected" : "Marker"}>{text}</p>
);

export default Marker;
