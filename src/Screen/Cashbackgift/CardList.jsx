import React from "react";
import Card from "../../Screen/Cashbackgift/Card"
import "./Card.css";

const cardData = [
  {
    image: "/Images/brand1.jpg",
    brand: "adidas",
    cashback: 10.4,
    coins: "coins",
    showInstore: true,
    showOnline: true,
  },
  {
    image: "/Images/brand2.jpg",
    brand: "Arsenal Football Club",
    cashback: 10.5,
    coins: "coins",
    showInstore: true,
    showOnline: true,
  },
  {
    image: "/Images/brand5.jpg",
    brand: "asos",
    cashback: 8.5,
    coins: "coins",
    showInstore: false,
    showOnline: true,
  },
  {
    image: "/Images/brand5.jpg",
    brand: "Bonmarché",
    cashback: 10.1,
    coins: "coins",
    showInstore: true,
    showOnline: true,
  },
  {
    image: "/Images/brand2.jpg",
    brand: "Boohoo.com",
    cashback: 6.1,
    coins: "coins",
    showInstore: false,
    showOnline: true,
  },
];

function CardList() {
  return (
    <div className="CardList">
      <h1>Fashion And Fitness <span className="count">({cardData.length})</span></h1>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
