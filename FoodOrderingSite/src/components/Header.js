import {useState} from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  
    return (
      <div className="header">
        <div className="logo-container">
          <img src="" alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{btnName==="Logout"?setBtnName("Login"):setBtnName("Logout")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;