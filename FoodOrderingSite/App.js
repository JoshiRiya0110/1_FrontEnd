import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
 * ---Logo
 * ---Nav Items
 * Body
 * ---Search
 * ---RestaurantContainer
 * ---RestaurantCard
 * Footer
 * ---Copyright
 * ---Links
 * ---Address
 * ---Contact
 */


const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img src="" alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>


        </div>
    )
}

const RestaurantCard = (props) =>{
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/27d43f8a2c1ca62704bb2dfd88d5b268"/>
            <h3>{props.resName}</h3>  
            <h4>{props.cuisine}</h4>  
            <h4>4.5 stars</h4>
            <h4>38 minutes</h4>        


        </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods"  cuisine="Indian, Chinese, American"/>
                <RestaurantCard resName="KFC" cuisine="Italian, American"/>
                <RestaurantCard resName="Subway" cuisine="Tibetan, Chinese"/>
                <RestaurantCard resName="Udupi" cuisine="Nepalese, Indian"/>
                <RestaurantCard resName="BLR" cuisine="Indian, Chinese, American"/>
            </div>
        </div>
    )
}


const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)