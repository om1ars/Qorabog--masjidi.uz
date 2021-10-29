import React from "react";

function Category({ categories, filterItems }) {
  return (
    <div>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <p
            style={{fontSize:'18px'}}
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
