/* eslint-disable react/jsx-key */
import React from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const [pageSize, setPageSize] = useState(4);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();
      setProducts(productData);
      // console.log(products);
    })();
  }, []);

  return (
    <>
      <header className="nav_wrapper">
        <div className="search_sortWrapper">
          <input className="search_input" type="text" />
        </div>
        <div className="icon_container">
          <button>
            <ArrowCircleUpIcon style={{ color: "white" }} fontSize="large" />
          </button>
          <button>
            <ArrowCircleDownIcon style={{ color: "white" }} fontSize="large" />
          </button>
        </div>
        <div className="categories_wrapper">Category</div>
      </header>

      <main className="product_wrapper">
        {products.map((product) => (
          <div className="product">
            <img src={product.image} alt="" className="product_image" />
            <div className="product_meta">
              <p className="product_title">{product.title}</p>
              <p className="Price">${product.price}</p>
            </div>
          </div>
        ))}
      </main>
      <div className="pagination">
        { let totalPages = Math.ceil(products.length / pageSize) }
        <button onClick={() => {

        }}>
          <KeyboardArrowLeftIcon fontSize="large"></KeyboardArrowLeftIcon>
        </button>
        <div className="pageNum">{pageNum}</div>
        <button>
          <ChevronRightIcon fontSize="large"></ChevronRightIcon>
        </button>
      </div>
    </>
  );
}
