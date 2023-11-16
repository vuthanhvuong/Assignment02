import React from "react";

const Body = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (mealObj) => {
      console.log(mealObj);
      const loadedMeals = [];

      for (const mealKey in mealObj) {
        loadedMeals.push({
          id: mealObj[mealKey].id,
          name: mealObj[mealKey].name,
          description: mealObj[mealKey].description,
          price: Number(mealObj[mealKey].price),
        });
      }
      setMeals(loadedMeals);
      console.log(meals);
    };

    fetchMeals(
      {
        url: "https://react-http-c233d-default-rtdb.firebaseio.com/meals.json",
      },
      transformMeals
    );
  }, [fetchMeals]);
};

export default Body;
