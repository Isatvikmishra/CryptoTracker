import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return( 
     <div className="h-screen flex flex-col items-center  bg-zinc-400">
        <div className="border-2 rounded-lg mt-60 p-16" >
          <h2 className="text-[50px]  text-red-700 ">ErrorElement</h2>
        <Link to={"/"}>  
           <button className="px-8 py-2 my-2 mx-14 border bg-yellow-500 "> Back to Home</button>
        </Link>
        </div>
      </div>
  )
};

export default ErrorElement;