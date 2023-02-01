import React from "react";
import { useState } from "react";
import JSONDATA from "./search.json";
import './dash.css';
import Twitter from "./img/Twitter.png";
import Telegram from "./img/Telegram.png";
import UPI from "./img/UPI.jpeg";
import Youtube from "./img/Youtube.png";
function Dashboard() {
    const [searchword, setSearchword] = useState(" ");
    return (
        <div className="search">
            <input className="input" type="text" placeholder="Search.." onChange={(event) => {
                setSearchword(event.target.value);
            }} />
            {JSONDATA.filter((val) => {
                if (searchword === "") {
                    return val
                } else if ((val.title).toLowerCase().includes(searchword.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    console.log(val)
                )})}
            <div className="cards-container">
                <div className="cardimg">
                    <img src={Twitter} alt="Twitter" />
                    <h2>Twitter</h2>
                </div>
                <div className="cardimg2">
                    <img src={Telegram} alt="Telegram" />
                  
                    <h2>Telegram</h2>
                </div>
                <div className="cardimg3">
                    <img src={UPI} alt="UPI" />
                    <h2>UPI</h2>
                </div>
                <div className="cardimg4">
                    <img src={Youtube} alt="Youtube" />
                    <h2>Youtube</h2>
                </div>
            </div>

        </div>
    );

}

export default Dashboard;