import React from "react";
import './navbar.css';
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className="sidebar">
            <ul className="sidebar-nav">
                <li className="sidebar-item">
                    <Link to="/Dashboard" className="sidebar-link">Dashboard</Link>
                </li>
                
                <li className="sidebar-item">
                    <Link to="/Telegram" className="sidebar-link">Telegram</Link>
                </li>
                
                <li className="sidebar-item">
                    <Link to="/Twitter" className="sidebar-link">Twitter</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/UPI" className="sidebar-link">UPI</Link>
                </li>
    
                <li className="sidebar-item">
                    <Link to="/Youtube" className="sidebar-link">Youtube</Link>
                </li>
            </ul>

        </div>
    );
}
export default Navbar;