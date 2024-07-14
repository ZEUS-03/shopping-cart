import React from "react";
import ProductCardCat from "./ProductCardCat";
import { PRODUCTS } from "../Constants"; // Sample product data

const ProductPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <ProductCardCat key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
