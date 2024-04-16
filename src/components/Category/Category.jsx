import React, { useState } from "react";
import Data from "../../Data";
import "./Category.css";

const Category = () => {
  const uniqueCategories = [...new Set(Data.map((item) => item.category))];

  const categoryDataItems = uniqueCategories.map((category) => (
    <li key={category}>
      <a href={`/product-category/${category}`}>{category}</a>
    </li>
  ));
  return (
    <div className="filter-cat">
      <ul>{categoryDataItems}</ul>
    </div>
  );
};

export default Category;
