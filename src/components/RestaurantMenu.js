import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const rid = useParams().resId;
  useEffect(() => {
    fetchMenu();
  }, []);
  const [data, setData] = useState(null);
  const [menu, setMenu] = useState(null);
  const fetchMenu = async () => {
    const menuP = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
        rid
    );
    const json = await menuP.json();
    setData(json?.data?.cards[0]?.card?.card?.info);
    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
      // [2]?.card?.card?.itemCards
    );
  };
  if (data === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } = data;
  console.log(data);
  console.log(menu);
  return (
    <div className="restaurant-menu-container">
      <div>
        <h1>{name}</h1>
        <h3>{costForTwoMessage}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <div className="menu">
          <ul>
           {menu.map((x)=>{
            return <li>{x.card.info.name}</li>
           })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
