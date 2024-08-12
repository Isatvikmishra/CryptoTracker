import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" my-2 bg-slate-50 shadow-md  w-full flex justify-between items-center px-4">
        <h1 className="cursor-pointer text-[30px] font-extrabold">
          myCrypto<span className="text-blue-700">Tracker</span>
        </h1>      

         <div className="flex gap-1 pr-2 text-[25px]">
            <FaWhatsapp className="text-green-700" />
            <FaFacebook className="text-blue-800" />
            <FaYoutube className="text-red-700" />
            <FaGithub /></div>
      </div>    
      

    
  );
};

export default Footer;