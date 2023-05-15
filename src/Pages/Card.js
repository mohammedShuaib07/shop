import React from "react";
import { useSelector } from "react-redux";
import { remove } from "../store/cardSlice";
import { useDispatch } from "react-redux";
import "./Card.css";

const Card = () => {
  const dispatch = useDispatch();
  const material = useSelector((state) => state.card);
  const handleRemove = (material) => {
    dispatch(remove(material));
  };
  return (
    <div>
      <h1>Card</h1>
      <div className="firstdiv1">
        {material.map((material) => (
          <div className="flex1" key={material.id}>
            <img className="image1" src={material.image} alt="" />
            <p className="p11">${material.price}</p>

            <p className="p22">{material.title}</p>
            <button
              onClick={() => handleRemove(material.id)}
              className="btn btn-warning"
              id="button1"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
