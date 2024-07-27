import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../contants";
import { MENU_DATA } from "../mocks/data";

const useRestaurant = (resId) => {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    // const json = await data.json();
    let json = MENU_DATA
    setRestauraunt(json.data);
  }

  return restaurant;
};

export default useRestaurant;
