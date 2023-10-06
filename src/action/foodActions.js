

export const fetchFood = ()=> async (dispatch) => {
    try {
        const reponse = await fetch(
            "https://anshtripathi-fitpulse.ansh-tripathi.repl.co/api/v1/foods"
          );
          const { foods } = await reponse.json();
          dispatch({type:'FETCH_FOOD_DATA',payload:foods});
    } catch (error) {
        console.log(error);
    }
   
  };


  export const addFood = (food) => async (dispatch) => {
    try {
        await fetch('https://anshtripathi-fitpulse.ansh-tripathi.repl.co/api/v1/foods/',{
            method:'POST',
            body:JSON.stringify(food),
            headers:{ "Content-type": "application/json; charset=UTF-8"}
        })
    } catch (error) {
        console.log(error);
    }
} 

  export const deleteFood = (foodId) => async (dispatch) => {
    try {
         await fetch(`https://anshtripathi-fitpulse.ansh-tripathi.repl.co/api/v1/foods/${foodId}`,{
            method:'DELETE'
        })
        
    } catch (error) {
        console.log(error);
    }
}