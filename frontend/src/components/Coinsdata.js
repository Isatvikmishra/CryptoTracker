import React from 'react'
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import DummyUi from './DummyUi';
import { Line } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MdOutlineStar, MdOutlineStarRate } from 'react-icons/md'; 
import { handleAddcoin, handleremovecoin } from "../store/watchlistSlice";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Coinsdata = () => {
    const { id } = useParams();  // Get the coin ID from the URL
    const [coinData, setCoinData] = useState({});
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    
    const watchlistData = useSelector(state => state.watchlist);
    
    const isPresent = (element, array) => 
        array.some(obj => JSON.stringify(obj) === JSON.stringify(element));

    const starRenderingLogic = isPresent(coinData, watchlistData);

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                // Fetch coin data
                const coinResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
                const coinInfo = await coinResponse.json();
                setCoinData(coinInfo);

                // Fetch historical data for the chart
                const chartResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`);
                const chartInfo = await chartResponse.json();

                const timestamps = chartInfo.prices.map(price => new Date(price[0]).toLocaleDateString());
                const prices = chartInfo.prices.map(price => price[1]);

                setChartData({
                    labels: timestamps,
                    datasets: [{
                        label: `${id.toUpperCase()} Price (USD)`,
                        data: prices,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                        fill: false
                    }]
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching coin data:', error);
                setLoading(false);
            }
        };

        fetchCoinData();
    }, [id]);

    const addCoin = () => dispatch(handleAddcoin(coinData));
    const removeCoin = () => dispatch(handleremovecoin(coinData));

    if (loading) return <DummyUi />;

    return (
        <>
            <div className='w-full grid grid-cols-3 divide-x-2 items-center mt-4 px-10'>
                <div className='w-3/4 pl-4'>
                    <div className='flex items-center gap-2 pt-4'>
                        <img className='w-7' src={coinData.image?.small} alt={`${coinData.name} logo`} />
                        <h2 className='text-[22px] font-semibold'>{coinData.name}</h2> 
                        <sup className='text-[15px] uppercase'>{coinData.symbol}</sup> 
                        <div className='bg-slate-200 py-1 px-1.5 rounded-xl'>
                            #{coinData.market_cap_rank}
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='text-[40px] font-bold'>
                            ${(coinData.market_data?.current_price?.usd || 0).toLocaleString()}
                        </div>
                        <div className='flex gap-2'>
                            {(coinData.market_data?.price_change_percentage_24h > 0 ? (
                                <FaArrowTrendUp className='text-white text-[22px] bg-green-600 rounded-full px-1' />
                            ) : (
                                <FaArrowTrendDown />
                            ))}
                            <div>{Math.round((coinData.market_data?.price_change_percentage_24h || 0) * 100) / 100}%</div>
                        </div>
                    </div>
                    <div className='border rounded-md text-center shadow-lg cursor-pointer'>
                    <div
                        className={`flex transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-110 items-center justify-center py-2 ${
                            starRenderingLogic ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                        onClick={starRenderingLogic ? removeCoin : addCoin}>
                        {starRenderingLogic ? (
                            <MdOutlineStar className="text-[24px] mr-2" />
                        ) : (
                            <MdOutlineStarRate className="text-[24px] mr-2" />
                        )}
                        Add to Watchlist
                    </div>
                </div>
                    <div>
                        <div className='flex shadow-sm items-center justify-between py-2'>
                            <div className='pt-4'>Market Cap</div>
                            <div className='pt-4'>${(coinData.market_data?.market_cap?.usd || 0).toLocaleString()}</div>
                        </div>
                        <div className='flex shadow-sm items-center justify-between py-2'>
                            <div>24 Hour Trading Vol</div>
                            <div>${(coinData.market_data?.total_volume?.usd || 0).toLocaleString()}</div>
                        </div>
                        <div className='flex shadow-sm items-center justify-between py-2'>
                            <div>Circulating Supply</div>
                            <div>{(coinData.market_data?.circulating_supply || 0).toLocaleString()}</div>
                        </div>
                        <div className='flex shadow-sm items-center justify-between py-2'>
                            <div>Total Supply</div>
                            <div>{(coinData.market_data?.total_supply || 0).toLocaleString()}</div>
                        </div>
                    </div>
                    <div className='text-[22px] py-4 font-semibold'>Info</div>
                    <div>
                        <div className='shadow-sm flex items-center justify-between py-2'>
                            <div>Website</div>
                            <div>
                                {coinData.links?.homepage[0] && (
                                    <Link className='bg-slate-200 py-1 px-1.5 rounded-md' to={coinData.links.homepage[0]}>Website</Link>
                                )}
                                {coinData.links?.whitepaper && (
                                    <Link className='bg-slate-200  py-1 ml-2 rounded-md' to={coinData.links.whitepaper}>Whitepaper</Link>
                                )}
                            </div>
                        </div>
                        <div className='shadow-sm flex items-center justify-between py-2'>
                            <div>Community</div>
                            <div className='flex items-center'>
                                {coinData.links?.facebook_username && (
                                    <a className='py-1 text-[18px] text-blue-700 ml-2 rounded-md' href={`https://facebook.com/${coinData.links.facebook_username}`} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                                )}
                                {coinData.links?.twitter_screen_name && (
                                    <a className='py-1 text-[18px] ml-2 rounded-md' href={`https://x.com/${coinData.links.twitter_screen_name}`} target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                                )}
                            </div>
                        </div>
                        <div className='shadow-sm flex items-center justify-between py-2'>
                            <div>Source Code</div>
                            <div className='flex items-center'>
                                {coinData.links?.repos_url.github[0] && (
                                    <a className='py-1 text-[18px] ml-2 rounded-md' href={coinData.links.repos_url.github[0]} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-4/5 col-span-2 pl-14">
                    <div className="p-4 bg-white">
                        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">{id.toUpperCase()} Price Chart</h2>
                        <div className="h-96 overflow-hidden">
                            <Line
                                data={chartData}
                                options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        x: {
                                            grid: {
                                                color: 'rgba(0, 0, 0, 0.1)', 
                                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                                borderDash: [5, 5], 
                                                drawOnChartArea: true,
                                            },
                                            ticks: {
                                                color: 'rgba(0, 0, 0, 0.6)', 
                                            },
                                        },
                                        y: {
                                            grid: {
                                                color: 'rgba(0, 0, 0, 0.1)', 
                                                borderColor: 'rgba(0, 0, 0, 0.1)', 
                                                borderDash: [5, 5], 
                                                drawOnChartArea: true,
                                            },
                                            ticks: {
                                                color: 'rgba(0, 0, 0, 0.6)',
                                            },
                                        }
                                    },
                                    plugins: {
                                        legend: {
                                            display: false, 
                                        },
                                        tooltip: {
                                            enabled: true, 
                                            mode: 'index', 
                                            intersect: false, 
                                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                            titleColor: '#fff', 
                                            bodyColor: '#fff', 
                                            borderColor: 'rgba(54, 162, 235, 1)', 
                                            borderWidth: 1,
                                            padding: 10,
                                            callbacks: {
                                                label: function(tooltipItem) {
                                                    return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toFixed(2)}`;
                                                }
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>     
                    </div>
                </div>      
            </div>   
        </>
    );
};

export default Coinsdata;