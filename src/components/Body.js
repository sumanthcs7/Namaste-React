import ResComponent from "./ResComponent";
import { useState } from "react";
import restaurants from "../utils/mockData";


const Body = () => {
  const [ ListRestaurants, setListRestaurants ] = useState(restaurants);
  return (
    <div className="body">
      <button
        className="search"
        onClick={() => {
          setListRestaurants(ListRestaurants.filter((x) => x.info.avgRating > 4.0));
        }}
      >
        Search
      </button>
      <div className="res-container">
        {ListRestaurants.map((x) => (
          <ResComponent key={x.info.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
