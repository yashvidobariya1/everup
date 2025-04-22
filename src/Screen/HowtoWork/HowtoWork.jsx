import React from "react";
import "./HowtoWork.css";

const HowItWorks = () => {
  return (
    <>
      <div className="how-it-works-container">
        <h1>How It Works</h1>
        <p className="intro-text">
          Realise what everyday shopping means to you with the awesome Cashback
          app! Experience the satisfaction of Instant Cashback, rewarding
          market-leading Cashback rates of up to 20% on every prepaid Gift Card
          purchase, uniquely in our Gift Card shop.
        </p>

        <div className="explanation">
          <h3>
            How can using gift cards save you money on shopping both online and
            in-store?
          </h3>
          <p>
            Using gift cards wisely allows you to stack multiple savings
            methods. Think of gift cards as cashback-loaded shopping vouchers.
            Buy discounted or cashback-enhanced gift cards, then use them to
            shop your favourite retailers — in-store or online.
          </p>
          <p>
            Get cashback when you purchase the gift card and again when you use
            it against a future purchase — double rewards! Some cards offer even
            better deals with loyalty cards, promo codes, or seasonal sales,
            multiplying your savings.
          </p>
          <p className="disclaimer">
            <strong>Note:</strong> Different retailers have different offerings.
            For example, Tesco now provides only cashback, whereas M&S offers
            discounts with cashback. Always check your Cashback app’s Gift Card
            section and see which option benefits you the most.
          </p>
        </div>

        <div className="howtowork-main">
          <div className="steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h2>Get Instant Cashback buying a Gift Card</h2>
                <p>
                  Purchase a gift card from a large selection of your favourite
                  brands, displayed clearly in the Gift Card section of the app.
                </p>
                <div className="step-image">
                  <img src="/Images/howtowork.jpeg" alt="Step 1" />
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <div className="step-text">
                  <h2>Get Instant Cashback buying a Gift Card</h2>
                  <p>
                    Purchase a gift card from a large selection of your
                    favourite brands, displayed clearly in the Gift Card section
                    of the app.
                  </p>
                </div>
                <div className="step-image">
                  <img src="/Images/howtowork2.jpeg" alt="Step 1" />
                </div>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h2>Redeem for Free</h2>
                <p>
                  Redeem for free by buying vouchers and cards starting from as
                  little as £1.00. Earning full cashback again or Cash Out to
                  the bank from as low as £3.00.
                </p>
                <div className="step-image">
                  <img src="/Images/howtowork3.png" alt="Step 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="howtowork-main-flex">
        <div className="rewards-section">
          <h2 className="section-title">More Ways to Win</h2>
          <ul className="rewards-list">
            <li>
              Automatically enter our Daily Raffle for the opportunity to win
              special brand-specific prizes and coins 🎰.
            </li>
            <li>
              Spin the Cashback and Cashback+ Wheels to win nothing but extra
              cashback, and loaded gift cards. Every day you also get 2 free
              Coins Spins.
            </li>
            <li>
              Scratch that itch by playing the Cashback Scratcher to reveal cash
              every single time. You also get 2 per week free Coins+ Scratchers.
            </li>
          </ul>

          <h3 className="repeat-title">Repeat the Cycle</h3>
          <p className="cycle-text">
            Keep the cycle going - more gift cards, more Cashback, more Coins,
            more games, and more wins! 🎉
          </p>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
