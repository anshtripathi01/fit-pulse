import React, { useEffect, useState } from "react";
import { ContentCard } from "../components/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { addFood, fetchFood } from "../action/foodActions";

export const Food = () => {
  const [food, setFood] = useState({
    name:'',
    calories:'',
    protein:'',
    carbohydrates:'',
    fat:''
  });
  const dispatch = useDispatch()
  const foods = useSelector(state=>state.foods)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFood(food));
    setFood({
      ...food,
      name:'',
      calories:'',
      protein:'',
      carbohydrates:'',
      fat:''
    })
  }
  useEffect(()=>{
    dispatch(fetchFood())
  },[dispatch,foods])
  return <div className="flex flex-col justify-center m-2">
  <h2 className="w-24 text-xl bg-gradient-to-r from-indigo-500 px-2">Foods: </h2>
  <form
    className="h-28 w-full shadow-md flex  justify-around items-center m-2 p-2"
    onSubmit={handleSubmit}
  >
      <input
        className=" w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500 p-2 m-2"
        type="text"
        value={food.name}
        onChange={(e) => setFood({ ...food, name: e.target.value })}
        placeholder="Food name"
        required
      />
    

      <input
        className="w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500 m-2 p-2 "
        type="number"
        value={food.calories}
        onChange={(e) =>
          setFood({ ...food, calories: e.target.value })
        }
        placeholder="Calories"
        required
      />
    

      <input
        className="p-2 w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500"
        type="number"
        value={food.protein}
        onChange={(e) =>
          setFood({ ...food, protein: e.target.value })
        }
        placeholder="Protein"
        required
      />
    
     
      <input
        className="p-2 w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500"
        type="number"
        value={food.carbohydrates}
        onChange={(e) =>
          setFood({ ...food, carbohydrates: e.target.value })
        }
        placeholder="Carbohydrates"
        required
      />
   

      <input
        className="p-2 w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500"
        type="number"
        value={food.fat}
        onChange={(e) =>
          setFood({ ...food, fat: e.target.value })
        }
        placeholder="Fat"
        required
      />
   
    <button className="bg-purple-500 px-8 rounded-sm py-1" type="submit">
      Add
    </button>
  </form>
  <div className="flex flex-wrap justify-center m-2">
  {!foods?.length && <h2 className="text-200">No Food found</h2>}
 {
    foods.map(({_id,name,calories,protein, carbohydrates, fat })=>
   <ContentCard key={_id} content = {{_id, name, calories, protein, carbohydrates, fat}} />
    )
  }</div>
  </div>;
};
