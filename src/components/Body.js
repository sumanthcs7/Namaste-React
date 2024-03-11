import ResComponent from "./ResComponent";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListRestaurants, setListRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchVal,setSeachVal] =useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };
  //conditional rendering
  const onelineStatus=useOnlineStatus();
  if (onelineStatus=== false) return <h1>Looks like you are offline please check your internet connection!!!</h1>
  return ListRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input type="text" className="border border-solid border-black" value={searchVal} onChange={(e)=>{
            setSeachVal(e.target.value);
        }}>

        </input>
        <button className="search px-2 py-2 bg-green-100 m-4" onClick={()=>{
            const tempList= ListRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchVal.toLowerCase()));
            setSeachVal("");
            setfilteredRestaurants(tempList);
        }}>
        Search
        </button>
        <button
          className="rateFilter mx-2"
          onClick={() => {
            setfilteredRestaurants(
              filteredRestaurants.filter((x) => x.info.avgRating > 4.0)
            );
          }}
        >
          TopRatedFilter
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants.map((x) => (
          <ResComponent key={x.info.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
