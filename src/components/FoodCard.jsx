import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteFood } from "../action/foodActions";

export const ContentCard = ({
  content: { _id, name, calories, protein, carbohydrates, fat },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="w-60 shadow-md relative flex flex-col justify-around items-center m-2 p-2">
      <MdDelete
        onClick={() => dispatch(deleteFood(_id))}
        className="absolute top-0 right-0 text-red-500 cursor-pointer"
        size={25}
      />
      <p>
        <strong>{name}</strong>
      </p>
      <p>{calories} kcal</p>
      <p>{carbohydrates}g</p>
      <p>{protein} g</p>
      <p>{fat} g</p>
    </div>
  );
};
