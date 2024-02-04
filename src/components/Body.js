import ResComponent from "./ResComponent";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListRestaurants, setListRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchVal,setSeachVal] =useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
  return ListRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input type="text" value={searchVal} onChange={(e)=>{
            setSeachVal(e.target.value);
        }}>

        </input>
        <button className="search" onClick={()=>{
            const tempList= ListRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchVal.toLowerCase()));
            setSeachVal("");
            setfilteredRestaurants(tempList);
        }}>
        Search
        </button>
        <button
          className="rateFilter"
          onClick={() => {
            setfilteredRestaurants(
              filteredRestaurants.filter((x) => x.info.avgRating > 4.0)
            );
          }}
        >
          Rate Filter
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((x) => (
          <ResComponent key={x.info.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
