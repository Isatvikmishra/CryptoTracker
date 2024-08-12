import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import Card from "../components/Card";



const CoinByIdData = () => {
  const { id } = useParams();
  const url = "https://api.coingecko.com/api/v3/coins/${id}"
  console.log(url)

    useEffect(() => {
        const options = {method: 'GET', headers: {accept: 'application/json'}};

        fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
            }, [id]);
            
return(
    <div>
    <h1 className="text-[60px]">CoinByIdData</h1>
    </div>
    )
}
export default CoinByIdData;
