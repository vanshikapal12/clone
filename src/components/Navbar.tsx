"use client";
import React from "react";
import Image from "next/image";
import { FaMoon } from "react-icons/fa"; // Import FontAwesome icons
import Link from "next/link";
// import { ModeToggle } from "./ModeToggle";
const navItem = [
  "home",
  "products",
  "solutions",
  "pricing",
  "blog",
  "support",
  "about",
];

const Navbar = () => {
  return (
    <nav className="w-full p-4">
      <div className="container mx-auto flex justify-between   ">
        <div className="border-2 border-gray-700 border-r-2 pr-4 flex items-center space-x-6 rounded-lg h-16">
          <Image src={"/logo.webp"} alt="image" height={45} width={45} /> |
          <div className="flex items-center space-x-6 ml-4">
            {navItem.map((item) => {
              return (
                <Link href={`/${item}`} key={item}>
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="border-2 border-gray-800 border-l-2 flex items-center space-x-2 rounded-lg ">
          {/* Added rounded-lg for rounded borders */}
          <div className="grBorder">
            <div className="text-white text-sm px-4 h-[25px] bg-black rounded-xl">
              Request a Demo
            </div>
          </div>
          {/* Added text-sm class */}
          {/* <ModeToggle /> */}
          <button className="text-black bg-white hover:text-white text-sm py-4 w-15 h-10">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
