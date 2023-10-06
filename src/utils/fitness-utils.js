
export const calculateBurnedCalories = (exercises) => {
   return exercises.reduce((total,{caloriesBurned})=>total+caloriesBurned,0)
}

export const calculateConsumedCalories = (foods) => {
    return foods.reduce((total,{calories})=>total+calories,0)
 }

 export const calculateGoalCalories = (goals) => {
    return goals.reduce((total,{calories})=>total+calories,0)
 }