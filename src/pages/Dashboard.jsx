import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateBurnedCalories,
  calculateConsumedCalories,
  calculateGoalCalories,
} from "../utils/fitness-utils";
import { fetchExercises } from "../action/exerciseAction";
import { fetchFood } from "../action/foodActions";
import { fetchGoals } from "../action/goalActions";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { exercises, foods, goals } = useSelector((state) => state);

  const metricses = [
    {
      _id: 1,
      metricsText: "Total Calories Burned",
      calories: calculateBurnedCalories(exercises),
    },
    {
      _id: 2,
      metricsText: "Total Calories Consumed",
      calories: calculateConsumedCalories(foods),
    },
    {
      _id: 3,
      metricsText: "Total Calories Goal",
      calories: calculateGoalCalories(goals),
    },
    {
      _id:4,
      metricsText:'Remaining Calories Goal',
      calories:calculateGoalCalories(goals)-calculateConsumedCalories(foods)

    }
  ];

  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchFood());
    dispatch(fetchGoals());
  }, [dispatch]);
  return (
    <div className="flex flex-col justify-center m-2">
      <h2 className="w-full text-xl bg-gradient-to-r from-indigo-500 px-1">
        Track your fitness matrices using one singal dashboard:{" "}
      </h2>
      <div className="container h-48 flex flex-wrap justify-around items-center">
        {metricses.map(({ _id, metricsText, calories }) => (
          <div
            className="w-64 shadow-md flex flex-col justify-center items-center p-4"
            key={_id}
          >
            <h3 className="font-bold">{metricsText}</h3>
            <p>{calories} kcal</p>
          </div>
        ))}
      </div>
    </div>
  );
};
