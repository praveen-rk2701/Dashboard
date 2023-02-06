import React from "react";
import { useState } from "react";
import JSONDATA from "./search.json";
import './dash.css';
import Twitter from "./img/download.png";
import Telegram from "./img/tele.jpeg";
import UPI from "./img/UPI.jpeg";
import Youtube from "./img/Youtube.png";
import {Link} from "react-router-dom";

function Dashboard() {
    const [searchword, setSearchword] = useState(" ");
    return (
        <div>
            <div className="search">

                
                <input className="input" type="text" placeholder="Search.." onChange={(event) => {
                    setSearchword(event.target.value);
                } } />&nbsp;
                <button type="button" className="button" onclick="submit">Search</button>
                {JSONDATA.filter((val) => {
                    if (searchword === "") {
                        return val;
                    } else if ((val.title).toLowerCase().includes(searchword.toLowerCase())) {
                        return val;
                    }
                }).map((val, key) => {
                    return (
                        console.log(val)
                    );
                    
                })}
                

            </div>
        <div className="cards-container">
                <div className="card">
                    <Link to="/Twitter">
                        <img src={Twitter} alt="Twitter" />
                    </Link>
                    <h2>Twitter</h2>
                </div>
                <div className="card">
                    <Link to="/UPI">
                        <img src={UPI} alt="UPI" />
                    </Link>
                    <h2>UPI</h2>
                </div>
                
                </div>
                <div className="cards-container1">
                <div className="card1">
                    <Link to="/Telegram">
                        <img src={Telegram} alt="Telegram" />
                    </Link>
                    <h2>Telegram</h2>
                </div>
                <div className="card1">
                    <Link to="/Youtube">
                        <img src={Youtube} alt="Youtube" />
                    </Link>
                    <h2>Youtube</h2>
                </div>
                </div>
            </div>
    );

}

export default Dashboard;