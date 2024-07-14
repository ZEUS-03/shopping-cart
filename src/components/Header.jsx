import React from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="bg-blue-600 p-4 shadow-md mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Shopping Cart</h1>
          <nav>
            <ul className="flex text-white space-x-4">
              <li>
                <Link to="/graph" className="text-white hover:text-gray-200">
                  <BsGraphUpArrow className="text-2xl mr-4" />
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-white hover:text-gray-200">
                  <GrCart className="text-2xl mr-4" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <ul className="flex text-lg justify-center items-center cursor-pointer text-blue-600 hover:text-blue-800">
        <Link to={"/"}>
          <li className="mx-2">All Items</li>
        </Link>
      </ul>
    </>
  );
};

export default Header;
