import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteExercise } from '../action/exerciseAction'

export const ExerciseCard = ({content:{_id,name,duration, caloriesBurned}}) => {
  const dispatch = useDispatch()
  
  
  return (
    <div className='w-60 shadow-md relative flex flex-col justify-around items-center m-2 p-2' >
    <MdDelete onClick={()=>dispatch(deleteExercise(_id))} className='absolute top-0 right-0 text-red-500 cursor-pointer' size={25} />
     <p><strong>{name}</strong></p>
     <p>{caloriesBurned} kcal</p>
     <p>{duration} mins</p>
    </div>
  )
}
