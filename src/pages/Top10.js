import React, {useEffect, useState } from "react"
import Cards from "../components/Cards"
import { useRef } from "react";


const Top10 = () => {
  const [data, setData] = useState([])


  
  useEffect(()=>{
    const url = "https://api.coingecko.com/api/v3/search/trending/";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  },[])

  return data.length === 0 ? (
    <div >Loading...</div>
  ) : (
    <div>
     
      <Cards apiData={data.coins} checker={"top10"} />
    </div>
    )
};

export default Top10