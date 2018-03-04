import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Flat = ({ imageUrl, name, price, priceCurrency, onSelect }) => (
  <div className="Flat" onClick={onSelect}>
    <img src={imageUrl} alt="appartment" />
    <h3>{name}</h3>
    <p>
      Price: {price} {priceCurrency}
    </p>
  </div>
);

Flat.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceCurrency: PropTypes.string.isRequired
};

export default Flat;
