

export const fetchExercises = () => async (dispatch,getState) => {
    try {
        const reponse = await fetch(
            "https://anshtripathi-fitpulse.ansh-tripathi.repl.co/api/v1/exercises"
          );
          const { exercises } = await reponse.json();
          dispatch({type:'FETCH_EXERCISE_DATA', payload:exercises})
    } catch (error) {
        console.log(error);
    }
   
}


export const deleteExercise = (exerciseId) => async (dispatch) => {
    try {
         await fetch(`https://anshtripathi-fitpulse.ansh-tripathi.repl.co/api/v1/exercises/${exerciseId}`,{
            method:'DELETE'
        })
        
    } catch (error) {
        console.log(error);
    }
}


export const addExercise = (exercise) => async (dispatch) => {
    try {
        await fetch('https://anshtripathi-fitpulse.ansh-tripathi.repl.co/api/v1/exercises/',{
            method:'POST',
            body:JSON.stringify(exercise),
            headers:{ "Content-type": "application/json; charset=UTF-8"}
        })
    } catch (error) {
        console.log(error);
    }
} 