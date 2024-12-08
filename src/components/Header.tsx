import React from "react";
import { IoIosSearch } from "react-icons/io";
import { RiAccountBoxFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";


const Header = () => {
  return (
    <header className="bg-[#7E33E0] text-white">
      {/* Top Header */}
      <div className="flex ml-10 mr-10 justify-between items-center px-4 md:px-8 py-2 text-sm">
        <div className="flex items-center space-x-4">
          <span>
            📧 <a href="mailto:mihasamul@gmail.com" className="hover:underline">mihasamul@gmail.com</a>
          </span>
          <span> (12345) 678900</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>English</span><IoIosArrowDown />
          <span>USD</span><IoIosArrowDown />
          <a href="#" className="hover:underline">Login</a> < RiAccountBoxFill className="size-4"/>
          <a href="#" className="hover:underline">Wishlist</a> <FaRegHeart />
          <a href="#" className="hover:underline"> <CiShoppingCart className="size-5" /> </a>
        </div>
      </div>

      {/* Lower Header */}
      <div className="bg-white text-black">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Hekto</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-purple-600">Home</a>
            <a href="#" className="hover:text-purple-600">Pages</a>
            <a href="#" className="hover:text-purple-600">Products</a>
            <a href="#" className="hover:text-purple-600">Blog</a>
            <a href="#" className="hover:text-purple-600">Shop</a>
            <a href="#" className="hover:text-purple-600">Contact</a>

          </nav>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-l-md px-3 py-1 focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-4 py-1 rounded-r-md hover:bg-pink-600">
              <IoIosSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
