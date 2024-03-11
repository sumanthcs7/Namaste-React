import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const rid = useParams().resId;
  const resInfo = useRestaurantMenu(rid);
  

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;
  const menu =resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
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
