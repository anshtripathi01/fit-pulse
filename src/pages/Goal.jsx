import React, { useEffect, useState } from 'react'
import { GoalCard } from '../components/GoalCard';
import { useDispatch, useSelector } from 'react-redux';
import { addGoal, fetchGoals } from '../action/goalActions';

export const Goal = () => {
  const dispatch = useDispatch()
  const goals = useSelector(state=>state.goals)
    const [goal, setGoal] = useState({
      name:'',
      description:'',
      deadline:'',
      calories:'',
      status:''
    });
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addGoal(goal));
      setGoal({...goal,
        name:'',
        description:'',
        deadline:'',
        calories:'',
        status:''
      } )
    }
  
    useEffect(()=>{
      dispatch(fetchGoals())
    },[dispatch, goals])
    return<div className="flex flex-col justify-center m-2">
    <h2 className="w-24 text-xl bg-gradient-to-r from-indigo-500 px-2">Goals: </h2>
    <form
      className="h-28 w-full shadow-md flex  justify-around items-center m-2 p-2"
      onSubmit={handleSubmit}
    >
        <input
          className=" w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500 p-2 m-2"
          type="text"
          value={goal.name}
          onChange={(e) => setGoal({ ...goal, name: e.target.value })}
          required
          placeholder='Your Goal'
        />
     
    
        <input
          className="p-2 w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500"
          type="text"
          value={goal.description}
          onChange={(e) =>
            setGoal({ ...goal, description: e.target.value })
          }
          placeholder='Write description'
          required
        />

        <input
          className="p-2 w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500"
          type="date"
          value={goal.deadline}
          onChange={(e) =>
            setGoal({ ...goal, deadline: e.target.value })
          }
          required
        />
  

        <input
          className="w-20 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500 m-2 p-2 "
          type="number"
          value={goal.calories}
          onChange={(e) =>
            setGoal({ ...goal, calories: e.target.value })
          }
          placeholder='Calories'
          required
        />


        <select
          className="p-2 w-36 focus:outline-none border border-slate-300 rounded-md focus:border-purple-500"
          value={goal.status}
          onChange={(e) =>
            setGoal({ ...goal, status: e.target.value })
          }
          placeholder='SELECT STATUS'
          required
        >
        <option value="">Select Status</option>
        <option value='In Progress'>In Progress</option>
        <option value='Achieved'>Achieved</option>
        <option value='Abandoned'>Abandoned</option>
        </select>
      <button className="bg-purple-500 px-8 rounded-sm py-1" type="submit">
        Add
      </button>
    </form>
    <div className="flex flex-wrap justify-center m-2">
    {!goals?.length && <h2 className="text-200">No Goal found</h2>}
   {
      goals?.map(({_id,name,description,deadline,calories,status})=>
     <GoalCard key={_id} content = {{_id, name, description, deadline, calories, status}} />
      )
    }</div>
    </div>;
}
