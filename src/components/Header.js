import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("login");
  const onln = useOnlineStatus();
  return (
    <div className="flex justify-between bg-green-100 mb-2">
      <div className="logo-constainer">
        <img alt="logo" className="h-28" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5 space-x-2">
          <li>Online Status:{onln ? "O": "X"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
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
