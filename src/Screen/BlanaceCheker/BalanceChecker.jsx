import React from "react";
import "./BalanceChecker.css";
import { motion } from "framer-motion";

const BalanceChecker = () => {
  const categories = [
    {
      title: "Activities",
      logos: ["b1.png", "b2.png", "b3.png", "b4.png", "b5.png"],
    },
    {
      title: "DIY",
      logos: ["b6.png", "b7.png", "b8.png", "b9.png"],
    },
    {
      title: "Fashion",
      logos: [
        "b10.png",
        "b11.png",
        "b12.png",
        "b13.png",
        "b14.png",
        "b15.png",
        "b16.png",
        "b17.png",
        "b18.png",
        "b19.png",
        "b20.png",
        "b21.png",
        "b22.png",
        "b23.png",
        "b24.png",
        "b25.png",
        "b26.png",
        "b27.png",
        "b28.png",
        "b29.png",
        "b30.png",
        "b31.png",
      ],
    },
    {
      title: "Food & Drink",
      logos: [
        "b32.png",
        "b33.png",
        "b34.png",
        "b35.png",
        "b37.png",
        "b38.png",
        // "b39.png",
        // "b40.png",
        "b41.png",
        "b42.png",
        "b43.png",
        "b45.png",
        "b44.png",
        "b46.png",
        "b47.png",
        "b48.png",
        "b49.png",
        "b50.png",
        "b51.png",
        "b52.png",
        "b53.png",
        // "b54.png",
        "b55.png",
        "b56.png",
        "b57.png",
        "b58.png",
        "b59.png",
      ],
    },
    {
      title: "General",
      logos: [
        // "b60.png",
        "b61.png",
        "b62.png",
        "b63.png",
        "b64.png",
        "b65.png",
        "b66.png",
        "b67.png",
        "b68.png",
      ],
    },
    {
      title: "Jwellery",
      logos: ["b70.png", "b69.png"],
    },
    {
      title: "Home",
      logos: [
        "b71.png",
        "b72.png",
        "b73.png",
        "b74.png",
        "b75.png",
        "b76.png",
        "b77.png",
        "b78.png",
        "b79.png",
        "b80.png",
        "b81.png",
        "b82.png",
      ],
    },
    {
      title: "Tech",
      logos: ["b85.png"],
    },
    {
      title: "Travel",
      logos: ["b86.png", "b87.png", "b88.png", "b89.png", "b90.png", "b91.png"],
    },
  ];

  return (
    <>
      <motion.div
        className="gift-card-container"
        style={{
          backgroundImage: "url('/Images/cashbackbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          y: [0, -20, 0],
          transition: { duration: 5, repeat: Infinity },
        }}
      >
        <div class="cashback-bg"></div>
        <div className="balancechecker-main">
          <div className="BalanceChecker-card amazon-card">
            <img src="/Images/amazon.png" alt="Tesco" />
          </div>

          <div className="BalanceChecker-card tesco-card">
            <img src="/Images/tesco.png" alt="Tesco" />
          </div>

          <div className="BalanceChecker-card primark-card">
            <img src="/Images/primark.png" alt="Tesco" />
          </div>
        </div>
      </motion.div>
      <div className="balanceChecker">
        {categories.map((category, index) => (
          <div className="category-section" key={index}>
            <h2>{category.title}</h2>
            <div className="logo-grid">
              {category.logos.map((logo, logoIndex) => (
                <img
                  key={logoIndex}
                  src={`/Images/${logo}`}
                  alt={logo.replace(".png", "")}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BalanceChecker;
