import React from "react";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="shop-main">
        <h2>Shop 212+ <br/>brands</h2>
        <div className="shop-image">
        <img src="/Images/shopimage1.png" />
        </div>
        </div>
        <div className="shop-content">
        <p>
          From groceries to getaways, top UK brands pay us when you buy everyup
          gift cards to shop online or instore, and we pass that straight onto
          you as cashback!
        </p>
        </div>
      </div>
      
      <div className="hero-right">
        <img src="/Images/shopimage.jpg" alt="Gift Card" />
      </div>
    </div>
  );
};

export default Shop;
