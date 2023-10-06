import React, { useEffect, useState } from "react";
import { ExerciseCard } from "../components/ExerciseCard";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, fetchExercises } from "../action/exerciseAction";

export const Exercise = () => {
  const [exercise, setExercise] = useState({
    name: "",
    duration: "",
    caloriesBurned: "",
  });

  const exercises = useSelector((state) => state.exercises);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExercise(exercise));
    setExercise({
      name: "",
      duration: "",
      caloriesBurned: "",
    });
  };
  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch, exercises]);
  return (
    <div className="flex flex-col justify-center m-2">
    <h2 className="w-28 text-xl bg-gradient-to-r from-indigo-500 px-1">Exercises: </h2>
      <form
        className="h-28 w-full shadow-md flex  justify-around items-center m-2 p-2"
        onSubmit={handleSubmit}
      >
        <input
          className=" w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500 p-2 m-2"
          type="text"
          value={exercise.name}
          onChange={(e) => setExercise({ ...exercise, name: e.target.value })}
          placeholder="Exercise name"
          required
        />

        <input
          className="w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500 m-2 p-2 "
          type="number"
          value={exercise.duration}
          onChange={(e) =>
            setExercise({ ...exercise, duration: e.target.value })
          }
          placeholder="Durations"
          required
        />

        <input
          className="w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500 p-2 "
          type="number"
          value={exercise.caloriesBurned}
          onChange={(e) =>
            setExercise({ ...exercise, caloriesBurned: e.target.value })
          }
          placeholder="Burned Calories"
          required
        />

        <button className="bg-purple-500 px-8 rounded-sm py-1" type="submit">
          Add
        </button>
      </form>
      <div className="flex flex-wrap justify-center m-2">
        {!exercises?.length && <h2 className="text-200">No Exercise found</h2>}
        {exercises?.map(({ _id, name, duration, caloriesBurned }) => (
          <ExerciseCard
            key={_id}
            content={{ _id, name, duration, caloriesBurned }}
          />
        ))}
      </div>
    </div>
  );
};
