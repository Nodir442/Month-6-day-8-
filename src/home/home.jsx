import React from "react";
import { CategoriesCard } from "./components/categories-card/categories-card";
import { categoryData } from "../data/categories";
import { productData } from "../data/products";
import { ProductCard } from "./components/product-card/product-card";
export const Home = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-2xl font-bold">Kategoriyalar</h3>
        <div className="flex justify-between">
          {categoryData.map((category) => (
            <CategoriesCard key={category.id} {...category} />
          ))}
        </div>
        <h2 className="h-full py-3 text-center my-5 font-medium text-2xl bg-orange-100 rounded-xl">
          Batafsil
        </h2>
        <div className="flex flex-wrap justify-between gap-y-4">
          {productData.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <h2 className="h-full py-3 text-center my-5 font-medium text-2xl bg-orange-100 rounded-xl">
          Ko'proq ko'rish
        </h2>
      </div>
    </>
  );
};
