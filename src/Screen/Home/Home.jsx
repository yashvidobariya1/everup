import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import Brand from "../../Home-content/Brand";
import Shop from "../../Home-content/Shop";
import Categories from "../../Home-content/Categories";
import Features from "../../Home-content/Feauters";
import features from "../../Data/Features.json";
import MoreBrand from "../../Home-content/MoreBrand";
import { GrNext, GrPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

const Home = () => {
  const [spend, setSpend] = useState(200);
  const cashbackRate = 4.7;
  const yearlyEarnings = ((spend * cashbackRate) / 100) * 12;
  const scrollReff = useRef(null);
  const scrollAmount = 300;

  const winners = [
    { name: "Leoni", type: "Cashback+", amount: "£1.50", date: "08/04/2025" },
    { name: "Nina", type: "Cashback+", amount: "£1.50", date: "08/04/2025" },
    { name: "Anita", type: "Cashback+", amount: "£1.50", date: "08/04/2025" },
    { name: "Rebecca", type: "Cashback", amount: "£5.00", date: "07/04/2025" },
    { name: "Wing", type: "Cashback+", amount: "£1.50", date: "07/04/2025" },
    { name: "Wing", type: "Cashback+", amount: "£1.50", date: "07/04/2025" },
  ];

  const scrollLeft = () => {
    if (scrollReff.current) {
      scrollReff.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (scrollReff.current) {
      scrollReff.current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    const progress = (spend / 1000) * 100;
    document.documentElement.style.setProperty("--progress", `${progress}%`);
  }, [spend]);

  return (
    <>
      <div className="home-main-div">
        <div className="cashback-promo">
          {/* Left content */}
          <div className="promo-left">
            <div className="home-badge">
              <img src="/Images/star-fill.png" id="star-fill-home" /> Up to 20%
              instant cashback
            </div>
            <h1>Get up to 20% cashback</h1>
            <h3>At 212+ top brands</h3>
            <p>
              🚫 Stop paying full price — shop with everup gift cards and earn
              instant cashback at Tesco, Airbnb, Boots, Starbucks & more!
            </p>
            <div className="store-buttons">
              <button
                className="store-btn"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/gb/app/everup-instant-cashback/id1531616116",
                    "_blank"
                  )
                }
              >
                <img src="/Images/apple.png" />
                App Store
              </button>

              <button
                className="store-btn"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.everup",
                    "_blank"
                  )
                }
              >
                <img src="/Images/playstore.png" />
                Google Play
              </button>
            </div>
            <div className="trustpilot">
              Excellent <img src="/Images/rating.png" id="home-review" />{" "}
              <img src="/Images/vector.png" id="home-rating" /> Trustpilot
            </div>
          </div>
          <motion.div
            className="promo-right"
            animate={{
              y: [0, -20, 0],
              transition: { duration: 5, repeat: Infinity },
            }}
          >
            <div className="phone-wrapper">
              <img
                src="/Images/mobile.png"
                alt="Mobile UI"
                className="mobile-img"
              />
              <div className="feature-tags">
                {features.map((f, i) => (
                  <div key={i} className="feature-tag">
                    <img src={f.icon} alt={f.title} className="icon" />
                    <div>
                      <strong>{f.title}</strong>
                      <div>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="savings-wrapper">
        <h1 className="savings-heading">Uncover Your Potential Savings! 💰</h1>
        <p className="savings-subheading">
          Build a passive income by spending using cashback Gift Cards at the
          places you shop!
        </p>
        <p className="savings-link">
          Not convinced yet? <span>Do the math yourself.</span>
        </p>

        <div className="home-calculation-main">
          <div className="savings-card">
            <div className="savings-flex">
              <div className="savings-left">
                <div className="savings-tabs">
                  <button className="savings-tab">
                    <img src="/Images/cart.png" />
                    Supermarket
                  </button>
                  <button className="savings-tab">
                    <img src="/Images/bag.png" />
                    Fashion
                  </button>
                  <button className="savings-tab">
                    <img src="/Images/plan.png" />
                    Travel
                  </button>
                  <button className="savings-tab">
                    <img src="/Images/teach.png" />
                    Tech
                  </button>
                </div>

                <div className="savings-slider">
                  <label className="savings-slider-label">
                    Your monthly spend on supermarket
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={spend}
                    onChange={(e) => setSpend(e.target.value)}
                    className="savings-range"
                  />

                  <div className="savings-slider-values">
                    <span>£0</span>
                    <span>£{spend}</span>
                    <span>£1,000</span>
                  </div>
                </div>

                <div className="savings-earnings">
                  <p className="savings-earnings-text">
                    What you could earn yearly
                  </p>
                  <h2 className="savings-earnings-value">
                    £{yearlyEarnings.toFixed(2)} + Coins
                  </h2>
                </div>
              </div>

              <div className="savings-right">
                <h3 className="savings-right-title">How we calculate this:</h3>
                <ul className="savings-right-list">
                  <li>4.7% cashback rate for Supermarket</li>
                  <li>
                    Calculation approximated based on consistent monthly
                    spending
                  </li>
                  <li>
                    Additional earnings possible through Coins Games, Referrals
                    and Promotions
                  </li>
                </ul>
              </div>
            </div>
            <p className="savings-coins-info">
              everup Coins are fun and the key to{" "}
              <strong>Extra Cashback</strong> and prizes!
            </p>
            {/* <div className="winners-wrapper">
              <h2 className="winners-title">Real Recent Winners</h2>
                      <button className="nav-button left" onClick={scrollLeft}>
                        <GrPrevious />
                      </button>
              <div className="winners-list" ref={scrollReff} >
                {winners.map((winner, index) => (
                  <div key={index} className="winner-card" >
                    <p className="winner-name">{winner.name}</p>
                    <p className="winner-type">{winner.type}</p>
                    <p className="winner-amount">{winner.amount}</p>
                    <p className="winner-date">{winner.date}</p>
                  </div>
                ))}
              </div>
                <button className="nav-button right" onClick={scrollRight}>
                          <GrNext />
                        </button>
            </div> */}
            <div className="category-slider">
              <button className="nav-button home-left" onClick={scrollLeft}>
                <GrPrevious />
              </button>

              <div className="home-categories-wrapper" ref={scrollReff}>
                {winners.map((winner, index) => (
                  <div key={index} className="winner-card">
                    <p className="winner-name">{winner.name}</p>
                    <p className="winner-type">{winner.type}</p>
                    <p className="winner-amount">{winner.amount}</p>
                    <p className="winner-date">{winner.date}</p>
                  </div>
                ))}
              </div>

              <button className="nav-button right" onClick={scrollRight}>
                <GrNext />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Brand />
      <Shop />
      <Categories />
      <MoreBrand />
      <Features />
    </>
  );
};

export default Home;
