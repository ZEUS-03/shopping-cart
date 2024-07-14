import React from "react";
// import { connect } from "react-redux";
// import { addToCart } from "../actions/cartActions";
import { PRODUCTS } from "../Constants";
import ProductCard from "./ProductCard";

function RecommendedProducts() {
  return (
    <div className="border border-solid border-slate-300 px-4 py-10 rounded-md shadow-lg">
      <h3 className="font-bold text-xl mb-3">Recommended Products:</h3>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default RecommendedProducts;
