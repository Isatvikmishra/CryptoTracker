import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Top10 from './pages/Top10';
import Trending from './pages/Trending';
import Watchlist from './pages/Watchlist';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Navbar from './components/Navbar';
import ErrorElement from './ErrorElement';
import Footer from './components/Footer';
import CoinByIdData from "./pages/CoinByIdData";
import { createContext } from "react";
import CoinsData from './components/CoinsData';
import { Provider } from 'react-redux';
import { store } from './store/store';


export const Name = createContext();



const AppLayout = ()=>{
 return(
    <div>
    <Provider store={store}>
    <Name.Provider value={"Satvik"}>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </Name.Provider>
    </Provider>
    </div>
 )
}

const browserRouter = createBrowserRouter([
    {
        element: <AppLayout/>,
        children:[
            {path:"/", element: <Home/>},
            {path:"/top10", element: <Top10/>},
            {path:"/trending", element: <Trending/>},
            {path:"/watchlist", element: <Watchlist/>},
            {path: "/coin/:id", element: <CoinByIdData />},
            {path: "/coinsData", element: <CoinsData />},


        ],
        errorElement: <ErrorElement/>
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={browserRouter} />);

