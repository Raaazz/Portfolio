import React, { useState } from "react";
import photo from "../images/raj.png";
import { FaHome, FaEye } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const SideNav = () => {
  const [activeId, setActiveId] = useState("home");

  const handleNavigation = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveId(id); 
  };

  const navItems = [
    { id: "home", icon: <FaHome className="text-[30px] text-white" />, label: "Home" },
    { id: "about", icon: <IoPersonSharp className="text-[30px] text-white" />, label: "About" },
    { id: "photos", icon: <FaEye className="text-[30px]" />, label: "Photos" },
    { id: "contact", icon: <CiMail className="text-[30px]" />, label: "Contact" },
  ];

  return (
    <div className="bg-[#222222] hidden w-[6%] lg:fixed h-full lg:top-0 lg:b-0 lg:flex flex-col items-center">
      <div className="bg-gray-500 w-full mt-5">
        <img src={photo} alt="Profile" className="w-full z-10" />
      </div>
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`group p-5 cursor-pointer flex flex-col gap-2.5 items-center ${activeId === item.id ? 'bg-black' : 'bg-[#222222]'} w-full text-white`}
          onClick={() => handleNavigation(item.id)}
        >
          {item.icon}
          <p className={`text-[24px] ${activeId === item.id ? 'text-white' : ' group-hover:text-white'}`}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
