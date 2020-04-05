import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/meals";

const intialState = {
    meals: MEALS,
    filtersMeals: MEALS,
    favoriteMeals: []

}
const mealsReducers = (state = intialState, action) => {

    switch (action.type) {
        case TOGGLE_FAVORITE:
            const exittingMeal = state.favoriteMeals.findIndex(
                meal => meal.id === action.mealId
            );
            if (exittingMeal >= 0) {
                const updateMeals = [...state.favoriteMeals];
                updateMeals.splice(exittingMeal, 1)
                return { ...state, favoriteMeals: updateMeals }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
            }

        default:
            return state;
    }

}

export default mealsReducers;