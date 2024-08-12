import { Link } from "react-router-dom";


function Navbar(){
    return (
        <div>
        <div  className="flex justify-between px-4 shadow-md ">
         <Link to={"/"}>   <h1 className="p-1 text-[35px] cursor-pointer font-bold text-zinc-900">Crypto<span className="text-blue-700">Tracker</span></h1>
         </Link>
           
            <navitems className="text-zinc-700 flex p-2 py-4 gap-4 font-semibold text-[20px]">

                <Link to={"/top10"}>
                    <p className="flex cursor-pointer hover:text-blue-700 ">Top 10</p>
               </Link>
               <Link to={"/trending"}> 
                    <p className="flex cursor-pointer hover:text-blue-700 ">Trending</p>
                </Link>  
                <Link to={"/Watchlist"}>        
                <p className="flex cursor-pointer hover:text-blue-700 ">Watch Later</p>
                </Link>  
            </navitems>
        </div>
        </div>
    );
}
export default Navbar;

// Reconcillation react div , react fibre

// gitinit 
// git add.

// adityakshk499/evening