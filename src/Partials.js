import "./style.css";
import React from "react";
function Header(){
    return (
        <div id="header">
            <a href="/" className="nav-link">Home</a>
            <a href="/dashboard" className="nav-link">DashBoard</a>
            <a href="/auth" className="nav-link">SignIn</a>
        </div>
    )
}
function Footer(){
    return (
        <div id="footer">
            All rights reserved 2022-2023
        </div>
    )
}
export {Header};
export {Footer};