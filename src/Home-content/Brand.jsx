import { useEffect, useRef, useState } from "react";
import Branddata from "../Data/Brand.json";
import "./Brand.css";

const Brand = () => {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const loopedData = [...Branddata, ...Branddata];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 1;

    const startScrolling = () => {
      intervalRef.current = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += scrollSpeed;

          const midpoint =
            (scrollContainer.scrollWidth / loopedData.length) * Branddata.length;

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
    <div className="popular-brands-container">
      <h2>Popular Brands</h2>
      <div
        className="brand-cards-wrapper"
        ref={scrollRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {loopedData.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.image} alt={brand.name} className="brand-image" />
            <div className="brand-info">
              <span className="brand-name">{brand.name}</span>
              <span className="brand-percent">
                {brand.percent} <span className="coins">+ coins</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
