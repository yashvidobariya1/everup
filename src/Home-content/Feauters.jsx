import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./Feature.css";

function Features() {
  return (
    <div className="features-container">
      <div className="features-text">
        <div className="Feature-content">
          <img src="/Images/instantcashback.png" className="feature-icon" />
          <h2>Instant Cashback</h2>
        </div>
        <p>Get cashback instantly on every purchase, no waiting required.</p>

        <div className="Feature-content">
          <img src="/Images/extracashback.png" className="feature-icon" />
          <h2>Extra Cashback</h2>
        </div>
        <p>
          Play games to win additional cashback on top of your guaranteed
          rewards.
        </p>

        <div className="Feature-content">
          <img src="/Images/redeemfree.png" className="feature-icon" />
          <h2>Redeem for Free</h2>
        </div>
        <p>
          Cash out your rewards starting from just £1, with no fees or
          restrictions.
        </p>
        <button className="learn-more">
          Learn More <FaArrowRight />
        </button>
      </div>
      <div className="features-image">
        <img src="Images/cashback.png" alt="App screenshot" />
      </div>
      <div className="scrolling-text">
        EXTRA CASHBACK REDEEM FOR FREE INSTANT CASHBACK REDEEM FOR FREE
      </div>
      <div className="scrolling-text1">
        EXTRA CASHBACK REDEEM FOR FREE INSTANT CASHBACK REDEEM FOR FREE
      </div>
    </div>
  );
}

export default Features;
