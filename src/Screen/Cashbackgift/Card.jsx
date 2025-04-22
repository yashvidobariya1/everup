import React from "react";
import "./Card.css";

function Card({ image, brand, cashback, coins, showInstore, showOnline }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={brand} />
      </div>

      <div className="tag-container">
        {showOnline && <span className="tag">online</span>}
        {showInstore && <span className="tag">instore</span>}
      </div>

      <div className="card-content">
        <h3>{brand}</h3>
        <p className="cashback">
          {cashback.toFixed(2)}% <span className="coins">+ {coins}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
