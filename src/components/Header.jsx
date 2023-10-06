import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='container shadow-md flex justify-between items-center w-full bg-purple-700 text-slate-300 p-2'>
        <NavLink to='/'><h2 className='text-xl font-semibold '>FitPulse</h2></NavLink>
        <NavLink to='/'>Dashboard</NavLink>
        <NavLink to='exercise'>Exercise</NavLink>
        <NavLink to='/food'>Food</NavLink>
        <NavLink to='/goal'>Goal</NavLink>
    </div>
  )
}
