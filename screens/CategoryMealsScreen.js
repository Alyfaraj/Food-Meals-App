import React from 'react';
import {  StyleSheet} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList'
import {useSelector} from 'react-redux'

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('CategoryId');
  const avilableMeals=useSelector(state=>state.meals.filtersMeals)
  const displayMeals = avilableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
  
  return (
    
   <MealList ListData={displayMeals} navigation={props.navigation} />
  );
};


CategoryMealScreen.navigationOptions = navigationData => {

  const CategoryId = navigationData.navigation.getParam('CategoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === CategoryId)
  return {
    headerTitle: selectedCategory.title,

  }
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

export default CategoryMealScreen;
