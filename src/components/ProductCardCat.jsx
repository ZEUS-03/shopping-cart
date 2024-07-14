import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/productSlice"; // Action to add item to cart

const ProductCardCat = ({ product }) => {
  const dispatch = useDispatch();

  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleAddToCart = () => {
    const productWithQty = { ...product, qty: 1 };
    dispatch(addToCart(productWithQty));
    setIsItemAdded(true);
    setTimeout(() => {
      setIsItemAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>

      {isItemAdded ? (
        <p className="mt-4 text-green-500 font-semibold py-2 px-4 rounded-md transition">
          Item added
        </p>
      ) : (
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCardCat;
