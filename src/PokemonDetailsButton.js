import React from "react";
import "./button.css";

const PokemonDetailsButton = ({ className, children, disabled, onClick }) => (
  <button
    onClick={onClick}
    className={`button-text ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default PokemonDetailsButton;
