import "./Products.css";
import React from "react";
function ProductsHeader(props) {
  return (
    <div>
      <h2 className="productsTitle">Products</h2>
      <div className="titles">{props.myTitles}</div>
    </div>
  );
}
export default ProductsHeader;