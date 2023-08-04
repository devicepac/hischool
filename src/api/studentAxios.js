import axios from "axios";

// Student Home
const getWeekFood = async setWeekMenuData => {
  try {
    const res = await axios.get(`/api/meal/main?sdSchulCode=${7240273}`);
    const result = res.data.list;
    const menuList = result.map(item => {
      item.menuOftheDay = item.menuOftheDay.split(",");
      return item;
    });
    setWeekMenuData(menuList);
  } catch (err) {
    console.log(err);
  }
};

const getTimeTable = async setTimeTable => {
  try {
    const res = await axios.get(`/api/timetable`);
    const result = res.data.list;
    setTimeTable(result);
  } catch (err) {
    console.log(err);
  }
};

//FoodMenuList;
const getMonthFood = async setFoodMenuList => {
  try {
    const res = await axios.get(`/api/meal`);
    const result = res.data;
    const foodMenuList = result.list;
    const newFoodMenuList = foodMenuList.map(item => {
      const newList = {
        start: item.date,
        end: item.date,
        menuType: item.lunchOrDinner,
        title: item.menuOftheDay,
      };
      return newList;
    });
    setFoodMenuList(newFoodMenuList);
  } catch (err) {
    console.log(err);
  }
};

export { getWeekFood, getTimeTable, getMonthFood };
