import { useState, useEffect } from "react";

const useRestaurantMenu = (rid) => {
    const [resInfo, setResInfo]=useState(null);
    useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    const menuP = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=" +
        rid
    );
    const json = await menuP.json();
    setResInfo(json);
  };
  return resInfo;
};
export default useRestaurantMenu;
