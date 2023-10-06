import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../action/goalActions";

export const GoalCard = ({
  content: { _id, name, description, deadline, calories, status },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="w-60 h-60 shadow-md relative flex flex-col justify-around items-right m-2 p-2">
      <MdDelete
        onClick={() => dispatch(deleteGoal(_id))}
        className="absolute top-0 right-0 text-red-500 cursor-pointer"
        size={25}
      />
      <p>
        <strong>{name}</strong>
      </p>
      <p>{description}</p>
      <p>{new Date(deadline).toDateString()}</p>
      <p>{calories} kcal</p>
      <p>{status} </p>
    </div>
  );
};
