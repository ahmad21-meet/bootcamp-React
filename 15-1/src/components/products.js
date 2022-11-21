import React, { useState, useEffect } from "react";
import data from "../store";
import ProductHeader from "./ProductHeader";
import Product from "./Product";
import "./Products.css";
function Products() {
  const [mydata, setMyData] = useState(data);
  const [productSelected, setProductSelected] = useState(null);
  useEffect(() => {
    console.log(mydata);
  }, []);

  const productHandler = (event) => {
    setProductSelected(event.target.textContent);
  };

  const myTitles = mydata.map((data) => {
    return (
      <ul>
        <li key={data.id} onClick={productHandler}>
          {data.title}
        </li>
      </ul>
    );
  });
  return (
    <div>
      {!productSelected && (
        <ProductHeader myTitles={myTitles}></ProductHeader>
      )}
      {productSelected && (
        <Product
          productSelected={productSelected}
          data={mydata}
          setProductSelected={setProductSelected}
        ></Product>
      )}
    </div>
  );
}
export default Products;