import React, { useEffect, useRef, useState } from "react";
// import Logo from '../../assets/Logo.png'
import { BiMenuAltLeft } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  // const mobileNavRef = useRef(null);

  const handleSidebar = () => {
    setSidebar(true);
  };

  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };
  
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [mobileNavRef]);

  const closeMobileMenu = () => {
    setSidebar(false);
  };
  
  return (
    <>
      <div class="grid grid-cols-12 gap-4 max-w-container mx-auto py-8">
        <div class="col-span-3">
          <div className=" relative">
            <BiMenuAltLeft onClick={handleSidebar} className=" text-4xl cursor-pointer" ></BiMenuAltLeft>
          {sidebar && (
            <div ref={mobileNavRef} className=" w-[260px] bg-[#2D2D2D] z-40   mt-4 absolute top-5 left-3" >
              <Sidebar ></Sidebar>
            </div>
          )}
          </div>
        </div>
        <div class="col-span-6 mx-auto">
          <ul className="flex gap-10 text-xl font-medium font-roboto text-primary">
            <li>
              Home
            </li>
            <li>Shop</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div class="col-span-3">
          <div className=" flex items-center gap-3">
            <FiPhoneCall className=" text-2xl text-second-primary"></FiPhoneCall>
            <p className=" text-base font-roboto font-semibold">
              +012 235 4562
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
