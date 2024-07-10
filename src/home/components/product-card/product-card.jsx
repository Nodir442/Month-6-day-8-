import React from "react";
import { redirect } from "react-router-dom";
export const ProductCard = ({ img, price, name, ordered }) => {
  return (
    <div className="w-56 h-96 bg-orange-100 rounded-xl p-5">
      <img className="w-52 mx-auto" src={img} alt="product img" />
      <p className="text-lg	text-primary">{price} so'm</p>
      <h3 className="text-sm mb-5">{name}</h3>
      <p className="text-sm	opacity-60	mb-5"> {ordered} ta buyurtma</p>
      <div>
        <button className="py-2.5 px-5 bg-primary text-white text-base	rounded-xl">Buyurtma berish</button>
      </div>
    </div>
  );
};
