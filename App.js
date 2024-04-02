import React from "react";

import ReactDOM from "react-dom/client";
const head = (
    <h1>sdadas</h1>
)

const Header = () => (

    <div className="header">
        <div className="logo-container">
        <img className="logo" src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg?w=400&h=300&c=crop" />
</div>
        <div className="nav-items">
            <ul>
                <li>home</li>
                <li>About us</li>
                <li>contact us</li>
                <li>cart</li>
            </ul>
        </div>
    </div>


)

const AppLayout = () => (
    <div id="container">
        {Header()}
        <h1>sadasdasd sadasda</h1>

    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);