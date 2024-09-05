import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import Card from "../components/Card";
import CoinsData from "../components/CoinsData";
import { useState } from "react";



const CoinByIdData = () => {
  const { id } = useParams();

  const [data, setData] = useState([])
  useEffect(()=>{
      const url = "https://api.coingecko.com/api/v3/coins/${id}"
      fetch (url)
      .then((response)=>{
          return response.json()
      }).then((data)=>{
          setData(data)
      }).catch((error)=> {
          console.error(error)
      })
  }, [])
            
return(
    <div>
    <CoinsData />
    </div>
    )
}
export default CoinByIdData;
