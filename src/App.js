import React from "react";

import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import RestaurantCard from "./components/Restaurant_card";









const AppLayout = () => (
    <div id="container">
        {Header()}
        {Body()}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
