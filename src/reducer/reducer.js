const initialState = {
  exercises: [],
  foods: [],
  goals: [],
};

export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXERCISE_DATA":
      return { ...state, exercises: action.payload };
    case "FETCH_FOOD_DATA":
      return { ...state, foods: action.payload };
    case "FETCH_GOALS_DATA":
      return { ...state, goals: action.payload };
    default:
      return state;
  }
};
