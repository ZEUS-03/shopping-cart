import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/productSlice";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../Constants";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    const productWithQty = { ...product, qty: 1 };
    dispatch(addToCart(productWithQty));
  };

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.PRODUCT,
    item: product,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="flex bg-white rounded-lg shadow-md p-4 m-2 transition-transform transform hover:scale-105"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-md mr-4"
      />
      <div className="flex flex-col">
        <div>
          <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
          <div className="flex justify-between text-lg ">
            <p className="text-gray-700 font-bold">Price:</p>
            <p>${product.price}</p>
          </div>
        </div>
        <button
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition"
          onClick={() => handleClick(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
