import React, { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { add } from "../store/cardSlice";

const Product = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  let link = async () => {
    let fetchdata = await fetch("https://fakestoreapi.com/products");

    let json = await fetchdata.json();
    console.log(json);

    setData(json);
  };

  useEffect(() => {
    link();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="firstdiv">
      {data.map((product) => {
        return (
          <>
            <div className="flex" key={product.id}>
              <img className="image" src={product.image} alt="" />
              <p className="p1">${product.price}</p>

              <p className="p2">{product.title}</p>
              <button onClick={() => handleAdd(product)} className="btn btn-warning" id="button">
                Add card
              </button>
            </div>
          </>   
        );
      })}
    </div>
  );
};

export default Product;
