import React, { useRef, useEffect, useState } from "react";
import "./CashbackGift.css";
import { FiSearch } from "react-icons/fi";
import Categories from "../../Home-content/Categories";
import Brand from "../../Home-content/Brand";
import Branddata from "../../Data/Brand.json";
import CardList from "./CardList";

const CashbackGift = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const loopedData = [...Branddata, ...Branddata];
  const [searchText, setSearchText] = useState("");

  const fashionCard = {
    Fahion: [
      {
        title: "adidas",
        image: "/Images/c1.png",
        offer: "11.10% + coins",
        availability: "Online & Instore",
      },
      {
        title: "asos",
        image: "/Images/c2.png",
        offer: "8.00% + coins",
        availability: "Online only",
      },
      {
        title: "Bonmarché",
        image: "/Images/c3.png",
        offer: "10.00% + coins",
        availability: "Online & Instore",
      },
      {
        title: "Boohoo.com",
        image: "/Images/c4.png",
        offer: "8.00% + coins",
        availability: "Online only",
      },
      {
        title: "Boohooman",
        image: "/Images/c5.png",
        offer: "8.00% + coins",
        availability: "Online only",
      },
      {
        title: "Clarks",
        image: "/Images/c6.png",
        offer: "7.60% + coins",
        availability: "Online & Instore",
      },
      {
        title: "Cotton On",
        image: "/Images/c7.png",
        offer: "5.50% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Cruise",
        image: "/Images/c8.png",
        offer: "4.00% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Decathlon",
        image: "/Images/c9.png",
        offer: "6.50% + coins",
        availability: "Online only",
      },
      {
        title: "Fashioncheque UK",
        image: "/Images/c10.png",
        offer: "5.00% + coins",
        availability: "Online & Instore",
      },
      {
        title: "Flaming Grill",
        image: "/Images/c11.png",
        offer: "9.10% + coins",
        availability: "Instore only",
      },
      {
        title: "FLANNELS",
        image: "/Images/c12.png",
        offer: "4.00% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Foot Locker",
        image: "/Images/c13.png",
        offer: "9.00% + coins",
        availability: "Instore only",
      },
      {
        title: "Frasers",
        image: "/Images/c14.png",
        offer: "4.00% + coins",
        availability: "Instore & online",
      },
      {
        title: "Frasers Group",
        image: "/Images/c15.png",
        offer: "4.00% + coins",
        availability: "Instore & online",
      },
      {
        title: "H&M UK",
        image: "/Images/c16.png",
        offer: "9.00% + coins",
        availability: "Online & Instore",
      },
      {
        title: "Harvey Nichols",
        image: "/Images/c17.png",
        offer: "10.30% + coins",
        availability: "Instore only",
      },
      {
        title: "Hungry Horse",
        image: "/Images/c18.png",
        offer: "8.20% + coins",
        availability: "Instore only",
      },
      {
        title: "I SAW IT FIRST",
        image: "/Images/c19.png",
        offer: "4.00% + coins",
        availability: "Instore & online",
      },
      {
        title: "Jack Wills",
        image: "/Images/c20.png",
        offer: "4.00% + coins",
        availability: "Instore & online",
      },
      {
        title: "JD Sports",
        image: "/Images/c21.png",
        offer: "8.60% + coins",
        availability: "Online & Instore",
      },
      {
        title: "JSHealth Vitamins",
        image: "/Images/c22.png",
        offer: "5.00% + coins",
        availability: "Online only",
      },
      {
        title: "Leisure Choice Gift Card",
        image: "/Images/c23.png",
        offer: "2.50% + coins",
        availability: "Online only",
      },
      {
        title: "Liberty",
        image: "/Images/c24.png",
        offer: "7.40% + coins",
        availability: "Online & Instore",
      },
      {
        title: "Lululemon",
        image: "/Images/c25.png",
        offer: "5.55% + coins",
        availability: "Instore & online",
      },
      {
        title: "Mango",
        image: "/Images/c26.png",
        offer: "7.20% + coins",
        availability: "Online only",
      },
      {
        title: "Matalan",
        image: "/Images/c27.png",
        offer: "8.50% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Moss UK",
        image: "/Images/c28.png",
        offer: "7.60% + coins",
        availability: "Instore & Online",
      },
      {
        title: "NastyGal",
        image: "/Images/c29.png",
        offer: "3.75% + coins",
        availability: "Online only",
      },
      {
        title: "New Look",
        image: "/Images/c30.png",
        offer: "8.60% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Nike",
        image: "/Images/c31.png",
        offer: "6.00% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Not on The High Street",
        image: "/Images/c32.png",
        offer: "11.50% + coins",
        availability: "Online only",
      },
      {
        title: "Paul Smith",
        image: "/Images/c33.png",
        offer: "5.60% + coins",
        availability: "Online & Instore",
      },
      {
        title: "River Island",
        image: "/Images/c34.png",
        offer: "10.00% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Schuh UK",
        image: "/Images/c35.png",
        offer: "9.00% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Scotts",
        image: "/Images/c36.png",
        offer: "4.00% + coins",
        availability: "instore & online",
      },
      {
        title: "Sports Direct",
        image: "/Images/c37.png",
        offer: "6.20% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Studio",
        image: "/Images/c38.png",
        offer: "4.00% + coins",
        availability: "instore & online",
      },
      {
        title: "The Charity Shop Gift Card UK",
        image: "/Images/c39.png",
        offer: "9.70% + coins",
        availability: "Instore only",
      },
      {
        title: "The Golf Gift Card",
        image: "/Images/c40.png",
        offer: "5.60% + coins",
        availability: "Instore & Phone",
      },
      {
        title: "The Vegan Gift Card",
        image: "/Images/c41.png",
        offer: "4.00% + coins",
        availability: "Instore & Online",
      },
      {
        title: "The White Company",
        image: "/Images/c42.png",
        offer: "+ coins",
        availability: "Online & Instore & Phone",
      },
      {
        title: "TK Maxx",
        image: "/Images/c43.png",
        offer: "8.50% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Totally Well",
        image: "/Images/c44.png",
        offer: "3.60% + coins",
        availability: "Online only",
      },
      {
        title: "Typo",
        image: "/Images/c45.png",
        offer: "5.00% + coins",
        availability: "instore & online",
      },
      {
        title: "USC",
        image: "/Images/c46.png",
        offer: "4.00% + coins",
        availability: "instore & online",
      },
      {
        title: "Wacky Warehouse",
        image: "/Images/c47.png",
        offer: "8.40% + coins",
        availability: "instore only",
      },
      {
        title: "YouChoose Fashion & Beauty Digital",
        image: "/Images/c48.png",
        offer: "3.50% + coins",
        availability: "Online only",
      },
      {
        title: "Zalando",
        image: "/Images/c49.png",
        offer: "8.00% + coins",
        availability: "Online only",
      },
    ],
    Sport: [
      {
        title: "adidas",
        image: "/Images/c50.png",
        offer: "11.10% + coins",
        availability: "Online & Instore",
      },
      {
        title: "Arsenal Football Club",
        image: "/Images/c51.png",
        offer: "10.00% + coins",
        availability: "Online & Instore",
      },
      {
        title: "Decathlon",
        image: "/Images/c52.png",
        offer: "6.50% + coins",
        availability: "Online & Instore",
      },
      {
        title: "Evans Cycles",
        image: "/Images/c53.png",
        offer: "4.00% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Foot Locker",
        image: "/Images/c54.png",
        offer: "9.00% + coins",
        availability: "Instore only",
      },
      {
        title: "Green Chef",
        image: "/Images/c55.png",
        offer: "10.00% + coins",
        availability: "Online only",
      },
      {
        title: "JD Sports",
        image: "/Images/c56.png",
        offer: "8.60% + coins",
        availability: "Online & Instore",
      },
      {
        title: "Leisure Choice Gift Card",
        image: "/Images/c57.png",
        offer: "2.50% + coins",
        availability: "Online only",
      },
      {
        title: "Lululemon",
        image: "/Images/c58.png",
        offer: "5.55% + coins",
        availability: "Instore & Online",
      },
      {
        title: "Sports Direct",
        image: "/Images/c59.png",
        offer: "6.20% + coins",
        availability: "Instore & Online",
      },
      {
        title: "The Golf Gift Card",
        image: "/Images/c60.png",
        offer: "5.60% + coins",
        availability: "Instore & Phone",
      },
      {
        title: "Ticketmaster UK",
        image: "/Images/c61.png",
        offer: "6.60% + coins",
        availability: "Online only",
      },
    ],
    TrevelAndLeisure: [
      {
        title: "Airbnb UK",
        image: "/Images/c62.png",
        offer: "4.70% + coins",
        availability: "Online only",
      },
      {
        title: "AirlineGift",
        image: "/Images/c63.png",
        offer: "7.10% + coins",
        availability: "Online only",
      },
      {
        title: "Butlins by Inspire",
        image: "/Images/c64.png",
        offer: "6.50% + coins",
        availability: "Phone only",
      },
      {
        title: "Buyagift",
        image: "/Images/c65.png",
        offer: "20.00% + coins",
        availability: "Online only",
      },
      {
        title: "Airbnb UK",
        image: "/Images/c66.png",
        offer: "4.70% + coins",
        availability: "Online only",
      },
      {
        title: "AirlineGift",
        image: "/Images/c67.png",
        offer: "7.10% + coins",
        availability: "Online only",
      },
      {
        title: "Butlins by Inspire",
        image: "/Images/c68.png",
        offer: "6.50% + coins",
        availability: "Phone only",
      },
      {
        title: "Buyagift",
        image: "/Images/c69.png",
        offer: "20.00% + coins",
        availability: "Online only",
      },
      {
        title: "Cineworld UK",
        image: "/Images/c80.png",
        offer: "9.60% + coins",
        availability: "Online & Instore",
      },
    ],
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 1;

    const startScrolling = () => {
      intervalRef.current = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += scrollSpeed;

          const midpoint =
            (scrollContainer.scrollWidth / loopedData.length) *
            Branddata.length;

          if (scrollContainer.scrollLeft >= midpoint) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 10);
    };

    if (!isHovered) {
      startScrolling();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, loopedData.length]);

  return (
    <>
      <Categories />
      <Brand />
      <div className="cashbackgrift-search-div">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search offers by brand"
            className="search-input"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="categories-popular-brands-container">
        {Object.keys(fashionCard).map((category, categoryIndex) => {
          const filteredItems = fashionCard[category].filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          );

          if (searchText && filteredItems.length === 0) {
            return null;
          }

          return (
            <div
              key={categoryIndex}
              className="brand-cards-wrapper"
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="categories-popular-brands-container-app">
                <h1 className="categories-popular-brands-heading">
                  {category}
                </h1>
                <div className="grid">
                  {(searchText ? filteredItems : fashionCard[category]).map(
                    (item, index) => (
                      <div key={index} className="fashion-card">
                        <p className="availability">{item.availability}</p>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="cashback-logo"
                        />
                        <p className="offer">{item.offer}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <CardList />
    </>
  );
};

export default CashbackGift;
