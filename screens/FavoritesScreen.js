import React from 'react';
import {   StyleSheet } from 'react-native';
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';



const FavoritesScreen = props => {

  const favMeals=useSelector(state=>state.meals.favoriteMeals)
  
  return (
    <MealList ListData={favMeals} navigation={props.navigation} />
  );
};



FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Favorites',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item title='Menu'
          iconName='ios-menu'
          onPress={() =>
            navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
  }
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
