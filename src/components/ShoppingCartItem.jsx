import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/productSlice";

function ShoppingCartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item?.id));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between bg-white shadow-md rounded-lg p-4 mb-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-md mb-4 md:mb-0 md:w-48 md:h-48 md:mr-4"
      />
      <div className="flex-grow mx-0 md:mx-6">
        <div className="flex mb-1">
          <span className="font-semibold text-gray-800">Name:</span>
          <span className="text-gray-800 ml-1">{item.name}</span>
        </div>
        <div className="flex mb-1">
          <span className="font-semibold text-gray-800">Description:</span>
          <span className="text-gray-600 ml-1">{item.description}</span>
        </div>
        <div className="flex mb-1">
          <span className="font-semibold text-gray-800">Quantity:</span>
          <span className="text-gray-800 ml-1">{item?.qty}</span>
        </div>
        <div className="flex mb-1">
          <span className="font-semibold text-gray-800">Price:</span>
          <span className="text-gray-800 ml-1">${item.price}</span>
        </div>

        <button
          className="mt-4 text-red-500 font-semibold rounded-md hover:underline transition"
          onClick={handleRemove}
        >
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
