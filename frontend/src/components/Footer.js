import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="bg-gradient-to-r from-blue-950 to-slate-900  mt-16 text-white py-8">
      <div className="container  mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-3 md:mb-0">
          <h2 className="text-4xl w-[51%] font-semibold">Monitor and analyze
             real-time cryptocurrency data seamlessly.</h2>
        </div>
        <div className="text-center md:text-right space-y-2">
          <Link to={"/"}>
            {" "}
            <h1 className="cursor-pointer text-[40px] font-extrabold">
              Crypto<span className="text-blue-700">Tracker</span>
            </h1>
          </Link>

          <p>📧 support@CryptoTracker.com</p>
        </div>
      </div>
      <div className=" mt-6 border-t border-gray-700 px-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
      <div className="flex text-2xl px-24 gap-1 ">
          <IoLogoWhatsapp  className=" text-green-400 cursor-pointer" />
          <FaFacebook  className="fill-blue-500 cursor-pointer" />
          <FaGithub className="text-white cursor-pointer" />
          <FaYoutube className="text-red-600 cursor-pointer" />
        </div>
        <p className="mt-2  pr-24 md:mt-0">© Copyright 2024, All Rights Reserved</p>
      </div>
    </footer>
  );  

};

export default Footer;
