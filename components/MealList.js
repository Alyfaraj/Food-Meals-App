
import React from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
import MealGridItem from '../components/MealGridItem'
import { useSelector,useDispatch } from 'react-redux';





const MealList=props=>{
     const favoritMeal=useSelector(state=>state.meals.favoriteMeals);

    const renderMealsList = mealItem => {
      const currentMealIsFavorite=favoritMeal.some(
        meal=>meal.id===mealItem.item.id)
        return <MealGridItem
          onSelect={() => props.navigation.navigate({
            routeName: 'MealDetail', params: {
             mealId:mealItem.item.id,
             mealtitle:mealItem.item.title,
             isFav:currentMealIsFavorite
            }
          })}
          title={mealItem.item.title}
          img={mealItem.item.imageUrl}
          complexity={mealItem.item.complexity}
          duration={mealItem.item.duration}
          affordability={mealItem.item.affordability}         
                  />
      }

    return( <View style={styles.List}>
        <FlatList data={props.ListData}
          keyExtractor={(item, index) => item.id}
          renderItem={renderMealsList}
          style={{ width: '100%' }}
        />
      </View>)
}





const styles = StyleSheet.create({
    List: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    }
  });
  export default MealList;
