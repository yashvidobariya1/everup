import { useEffect, useRef, useState } from "react";
import Branddata from "../Data/Brand.json";
import { GrNext, GrPrevious } from "react-icons/gr";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FiSend } from "react-icons/fi";
import { SiAudiotechnica } from "react-icons/si";
import { FaShirt } from "react-icons/fa6";
import { IoStorefrontOutline } from "react-icons/io5";
import { RiTakeawayLine } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";
import "./Categories.css";

const Categories = () => {
  const scrollReff = useRef(null);
  const scrollAmount = 300;

  const categories = [
    { title: "Groceries", count: 10, icon: <MdOutlineLocalGroceryStore /> },
    { title: "Travel And Holiday", count: 32, icon: <FiSend /> },
    { title: "Home Garden And DIY", count: 14, icon: <GiAutoRepair /> },
    { title: "Tech", count: 11, icon: <SiAudiotechnica /> },
    { title: "Fashion And Fitness", count: 34, icon: <FaShirt /> },
    { title: "Department Stores", count: 8, icon: <IoStorefrontOutline /> },
    { title: "Eating And Drinking Out", count: 44, icon: <GiForkKnifeSpoon /> },
    { title: "Take way", count: 8, icon: <RiTakeawayLine /> },
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

  return (
    <>
      <div className="container">
        <h1 className="heading">Browse Categories</h1>

        <div className="category-slider">
          <button className="nav-button left" onClick={scrollLeft}>
            <GrPrevious />
          </button>

          <div className="categories-wrapper" ref={scrollReff}>
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className="icon">{category.icon}</div>{" "}
                {/* ← Use category.icon here */}
                <h4>{category.title}</h4>
                {/* <span className="badge">{category.count}</span> */}
              </div>
            ))}
          </div>

          <button className="nav-button right" onClick={scrollRight}>
            <GrNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default Categories;
