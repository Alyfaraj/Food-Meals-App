export const TOGGLE_FAVORITE='TOGGLE_FAVORITE';
export const SET_FILTERS='SET_FILTERS'

export const toggle_farvorite=(id)=>{
    return{type : TOGGLE_FAVORITE ,mealId:id};
};

export const set_filters=filtersSettings=>{
    return{type:SET_FILTERS,filters:filtersSettings}
}
