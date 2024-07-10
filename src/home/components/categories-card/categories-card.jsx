import React from "react";
export const CategoriesCard = ({ name,id,img }) => {
  return (
    <div className="text-center w-36">
      <img className="py-2 px-1" src={img} alt="categoriesImg" />
      <h2 className="text-sm font-semibold">{name}</h2>
    </div>
  );
};
