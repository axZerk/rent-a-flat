import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import Flat from "../Flat";

const FlatsList = ({ flats, handleFlatSelect }) => (
  <ul className="FlatsList">
    {flats.map(flat => (
      <li key={flat.id} className="FlatsList__item">
        <Flat {...flat} onSelect={() => handleFlatSelect(flat)} />
      </li>
    ))}
  </ul>
);

FlatsList.propTypes = {
  flats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      priceCurrency: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default FlatsList;
