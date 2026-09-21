import { useState } from "react";
import MenuCard from "./MenuCard";
import menuData from "../data/menuData";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(menuData.map((item) => item.category)),
  ];

  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section id="menu" className="menu section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-subtitle">OUR MENU</p>
          <h2>Explore Our Dishes</h2>
        </div>

        <div className="menu-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredMenu.map((item, index) => (
            <MenuCard key={item._id || index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;