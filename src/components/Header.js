import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-constainer">
        <img alt="logo" className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
