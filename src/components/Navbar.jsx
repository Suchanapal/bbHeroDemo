"use client";
import { categories, navigationItems } from "./data";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VscHeart } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiMenu } from "react-icons/fi";
import { sidebarOptions } from "./data";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { useRouter } from "next/navigation";


// import Cart from "./Cart";
const Navbar = () => {
 

  // **MAking navbar sticky on scroll **
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

   useEffect(() => {
  AOS.init();
}, []);


  return (
    <>
      <div className="topSocials h-8 bg-slate-900 flex justify-center"data-aos="fade-down" data-aos-delay="1050">
        <div className="flex space-x-2.5 m-auto socials">
          <a href="#" className="text-white hover:text-gray-300 text-sm">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-300 text-sm">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-gray-300 text-sm">
            <FaEnvelope />
          </a>
          <a href="#" className="text-white hover:text-gray-300 text-sm">
            <FaPinterest />
          </a>
          <a href="#" className="text-white hover:text-gray-300 text-sm">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className={`container mx-auto max-w-7xl `} data-aos="fade-down" data-aos-delay="1070">
        <div
          className={`topbar md:flex md:items-center md:justify-between px-4 py-6 ${
            isSticky ? "sticky slide-in-top " : ""
          }`}
        >
          {/* First div with logo */}
          <Link href="/">
            <div className="px-4 flex justify-center align-middle">
              <Image src="/logo.png" alt="Logo" width={250} height={40} />
            </div>
          </Link>

          {/* Second div with search bar and button */}
          <form
            className="mt-4 md:mt-0 flex flex-row md:form md:flex-grow md:items-center md:justify-between md:px-2"
            
          >
            <div className="mt-4 md:mt-0 flex flex-row md:form md:flex-grow md:items-center md:justify-between md:px-2">
              <input
                id="searchInput"
                name="searchInput"
                type="text"
                placeholder="Search for Products"
                className="w-full border border-gray-300 px-4 py-2 h-11"
              />
              <button
                type="submit"
                className="btn hover:bg-indigo-900 text-white px-2 py-2 h-11 w-10 text-lg font-bold uppercase"
              >
                <FaSearch />
              </button>
            </div>
          </form>

          {/* Third div with login/register, wishlist, and shopping bag */}
          <div className="hidden md:flex md:items-center md:space-x-4">
           
              <button
                className="text-black"

              >
                Login/Register
              </button>
            
              {/* <div className="relative">
  <div className=" py-4 brow cursor-pointer">
    <div className="dropdown-trigger  ">My account</div>
    <div className="menu">
      <div className="dropdown-menu mt-1.5 slide-in-bottom w-52 z-20 absolute bg-white text-gray-400 shadow-md ">
        <ul>
          {sidebarOptions.map((option, index) => (
            <li key={index}>
              <Link
                href={option.link}
                className="block text-gray-800 py-2 px-4 hover:bg-gray-100 latofont text-sm"
              >
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div> */}


          


            <div className="relative">
              <div className="absolute top--2 left-4 w-3 h-3 bg-indigo-900 text-white flex items-center justify-center text-xs pb-0.5 rounded-full">
               4
              </div>
              <Link href="/wishlist">
                <VscHeart style={{ fontSize: "24px" }} />
              </Link>
            </div>

            <div
              className="relative"
              onClick={() => {
                setShowCart(true);
                // console.log("cart show clicked");
              }}
            >
              <div className="absolute top--3 left-4 pb-0.5  w-3 h-3 bg-indigo-900 text-white flex items-center justify-center text-xs rounded-full">
                6
              </div>
              <LiaShoppingBagSolid className="cursor-pointer" style={{ fontSize: "24px" }} />
            </div>

            <div className="price">499$</div>
          </div>
        </div>

        {/* Third div with side dropdown menu */}

        <div className="flex justify-start items-center border-t-2 border-b-2">
          <div className="browse">
            {/* Dropdown Icon */}
            <FiMenu className="h-6 w-6 text-white" />

            {/* Browse Categories */}
            <p className="latofont text-sm">BROWSE CATEGORIES</p>
            <img src="drop down.png" height="7px" width="7px" />

            {/* Dropdown Content */}
            <ul className="dropdown-content slide-in-bottom latofont">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={category.url}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-row">
            {navigationItems.map((item, index) => (
              <div key={item.id} className="group relative">
                {/* Parent Menu Item */}
                
                  <Link
                    href={item.url}
                    className="text-black latofont text-xs hover:text-gray-600 px-4 py-2 font-bold"
                  >
                    

                    
                  </Link>
               

                {/* Box Menu for Submenu */}
                {item.submenu && (
                  <div className="brow ">
                    <div className="mt-1.5 slide-in-bottom w-52 z-20 hidden group-hover:block absolute bg-white text-gray-400 shadow-md ">
                      <ul>
                        {item.submenu.map((subitem) => (
                          <li key={subitem.id}>
                            <Link
                              href={subitem.url}
                              className="block text-gray-800 py-2 px-4 hover:bg-gray-100 latofont text-sm"
                            >
                              {subitem.title} 
                              
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* bottom navbar ends */}

     
    </>
  );
};

export default Navbar;
