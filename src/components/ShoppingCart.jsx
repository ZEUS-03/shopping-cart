import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../Constants";
import { addToCart } from "../store/productSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart() {
  const cartItems = useSelector((state) => state?.products?.cart);

  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.PRODUCT,
    drop: (item, monitor) => {
      const productWithQty = { ...item, qty: 1 };
      dispatch(addToCart(productWithQty));
    },
  });

  return (
    <div
      ref={drop}
      className="w-full mx-auto p-8 border border-solid shadow-md rounded-lg px-8"
    >
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="bg-white p-4 mb-4">
            {cartItems.map((item) => (
              <ShoppingCartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition">
              Check Out
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
