import React, { useCallback, useEffect } from 'react';
import { View, Text, StyleSheet ,Image,ScrollView, Dimensions} from 'react-native';
import { Item, HeaderButtons } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import { useSelector,useDispatch } from 'react-redux';
import { toggle_farvorite } from '../store/actions/meals';



const MealDetailScreen = props => {
  const avialableMeals=useSelector(state=>state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = avialableMeals.find(meal => meal.id === mealId);
  const currentMealIsFavorite=useSelector(state=>state.meals.favoriteMeals.some(
    meal=>meal.id===mealId))

  const dispatch=useDispatch();

  const handelToggleFavorite=useCallback(()=>{
    dispatch(toggle_farvorite(mealId))
  },[dispatch,mealId]);

  useEffect(()=>{
    props.navigation.setParams({toggleFav:handelToggleFavorite});
  },[handelToggleFavorite]);

  useEffect(()=>{
    props.navigation.setParams({isFav:currentMealIsFavorite})
  },[currentMealIsFavorite])

  return (
    <ScrollView >
    <Image style={styles.Image} source={{uri:selectedMeal.imageUrl}}/>
    <View style={styles.itemDetails}>
    <Text  >{selectedMeal.duration}m</Text>
    <Text  >{selectedMeal.complexity}</Text>
    <Text  >{selectedMeal.affordability}</Text>
    </View>    
    <Text style={styles.titlesStyle} >Ingredients</Text>
    {selectedMeal.ingredients.map(ingradient=>
      <View style={styles.borderStyle}><Text key={ingradient}>{ingradient}</Text></View>
    )}
    <Text style={styles.titlesStyle} >Steps</Text>
    {selectedMeal.steps.map(step=>
      <View style={styles.borderStyle}><Text key={step}>{step}</Text></View>
    )}
   
     
    </ScrollView>
  );
};



MealDetailScreen.navigationOptions = navigationData => {

  const mealId = navigationData.navigation.getParam('mealId');
  Mealtitle=navigationData.navigation.getParam('mealtitle');
  const togglefav= navigationData.navigation.getParam('toggleFav');
  const isfav= navigationData.navigation.getParam('isFav');
  return {
    headerTitle: Mealtitle,
    headerRight: ()=>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favorite'
         size={28}
         iconName={isfav?'ios-star':'ios-star-outline'}
         onPress={togglefav}
         />
      
      </HeaderButtons>
      
  }
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:5,

  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginVertical:10
},
titlesStyle:{
  marginVertical:10, 
  textAlign:'center',  
  fontFamily:'open-sans-bold',
  fontSize:22
},
Image:{
  width:'100%',
  height:200
},
borderStyle:{
  borderStyle:'solid',
  borderWidth:.8,
  padding:10,
  width:Dimensions.get('window').width*.85,
  alignContent:'space-around',
  marginVertical:5,
  alignSelf:'center',

}


});

export default MealDetailScreen;
