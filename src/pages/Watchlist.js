import React from "react"
import { useSelector } from "react-redux";
import Cards from "../components/Cards";


function Watchlist(){
  var data = useSelector((store) => store.watchlistSlice);  
   console.log(data)
 
 return data.length === 0 ? (<div>Add items to Watchlist</div>): (<div>
  <Cards apiData={data}/>
 </div>)

}

export default Watchlist;