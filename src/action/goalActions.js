

export const fetchGoals = ()=> async (dispatch) => {
    try {
        const reponse = await fetch(
            "https://anshtripathi-fitpulse.ansh-tripathi.repl.co/api/v1/goals"
          );
          const { goals } = await reponse.json();
          dispatch({type:'FETCH_GOALS_DATA',payload:goals});
    } catch (error) {
        console.log(error);
    }
   
  };


  export const addGoal = (goal) => async (dispatch) => {
    try {
        await fetch('https://anshtripathi-fitpulse.ansh-tripathi.repl.co/api/v1/goals/',{
            method:'POST',
            body:JSON.stringify(goal),
            headers:{ "Content-type": "application/json; charset=UTF-8"}
        })
    } catch (error) {
        console.log(error);
    }
} 

  export const deleteGoal = (goalId) => async (dispatch) => {
    try {
         await fetch(`https://anshtripathi-fitpulse.ansh-tripathi.repl.co/api/v1/goals/${goalId}`,{
            method:'DELETE'
        })
        
    } catch (error) {
        console.log(error);
    }
}