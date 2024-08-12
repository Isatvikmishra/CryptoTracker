import React from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Name } from "../index";
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { handleAddCoins, handleRemoveCoins } from "../store/watchlistSlice" 
import { MdOutlineStar } from "react-icons/md";

const Card = ({ item, checker }) => {
  const data = useSelector((store) => store.watchlistSlice);
  const dispatch = useDispatch()
  // console.log(data)

  const isPresent = (element, array) =>
    array.some((obj) => JSON.stringify(obj) === JSON.stringify(element));
 
  const starRenderingLogic = isPresent(item, data);
  console.log(starRenderingLogic);

  function addCoinsToWatchlist(){
    dispatch(handleAddCoins(item));
  }

  function removeCoinsToWatchlist(){
    dispatch(handleRemoveCoins(item))
  }


  return (
  
    <div className=" w-full mt-5 py-4 px-5 flex flex-col border rounded-md shadow-lg bg-gradient-to-r from-cyan-200 to-blue-200 hover:from-orange-200 hover:to-pink-200">
      <div className="flex items-center gap-4">
        <img className="w-1/6 " src={checker === "top10" ? item.thumb : item.image} alt="crypto-logo"/>
        <div className="flex flex-col w-full">
        <abbr title="Click here to know more.">
          <Link to={`/coin/${item.id}`}>  
            <h2 className="text-[25px] font-bold">{item.name}</h2>
            </Link>
          </abbr> 
        <h2 className="text-[20px] font-semibold text-gray-500">
            {item.symbol}
        </h2>
      </div>
      {
      starRenderingLogic ? (
      <MdOutlineStar onClick={removeCoinsToWatchlist} className="text-[50px]" />) : (

      <MdOutlineStarRate onClick={addCoinsToWatchlist} className="text-[50px]" />) 
      }

      </div>

    <div className="flex items-center gap-4">
      {checker !== "top10" && ( <h3 className="border px-2 py-1 text-[22px] rounded-3xl border-green-400 shadow-sm">&#x24;{Math.round(item.price_change_24h * 10000) / 10000}</h3>)}
      <div className="border p-2 rounded-full border-green-500 shadow-md">
       { checker === "top10" ? (item.data.price_change_percentage_24h.usd > 0 ? (
          <FaArrowTrendUp />
        ) : (
          <FaArrowTrendDown />
        )):
        item.price_change_24h > 0 ? (
          <FaArrowTrendUp />
        ) : (
          <FaArrowTrendDown />
        )}
      </div>
    </div>
    <h3 className="text-[28px] font-bold text-green-600">
       
        &#x24;{checker === "top10"?  Math.round(item.data.price * 100000) / 100000 : Math.round(item.current_price * 100000) / 100000}
      </h3>
      <div>
        <div>Total Volume: &#x24;{checker==="top10" ? item.data.total_volume : item.total_volume}</div>
        <div>Market Cap:{checker === "top10" ? item.data.market_cap : item.market_cap}</div>
      </div>
    </div>
    
  );
};

export default Card;