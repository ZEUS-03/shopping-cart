import React from "react";

import ShoppingCart from "./ShoppingCart";
import RecommendedProducts from "./RecommendedProducts";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Cart() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 p-4">
          <ShoppingCart />
        </div>
        <div className="w-full md:w-1/4 p-4">
          <RecommendedProducts />
        </div>
      </div>
    </DndProvider>
  );
}

export default Cart;
