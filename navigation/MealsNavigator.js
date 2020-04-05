import React from 'react';
import { createAppContainer } from 'react-navigation';
//npm install react-navigation-stack @react-native-community/masked-view
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'


import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';
import { Platform } from 'react-native';



const defaultOptions={

  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
  },
  headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
}



const MealsNavigator = createStackNavigator({
  Categories:
    { screen: CategoriesScreen },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: { screen: MealDetailScreen }
},
  {
    mode: 'modal',
    defaultNavigationOptions: defaultOptions
  });



const FavNavigator = createStackNavigator({
 Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
},
  {
    defaultNavigationOptions:defaultOptions
  }
)




const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={23} color={tabInfo.tintColor}></Ionicons>
      }
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}></Ionicons>
      }
    }
  }
};

const MealFavTab = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: Colors.accent,
    shifting: true
  })
  : createBottomTabNavigator(
    tabScreenConfig
    , {
      tabBarOptions: {
        activeTintColor: Colors.accent
      }
    }

  );

  const FilterNavgitor=createStackNavigator({
    Filter:FiltersScreen},{
    defaultNavigationOptions:defaultOptions
    
  });

  const drawerNavgatior=createDrawerNavigator({
    Mealsfavs:MealFavTab,
    Filters:FilterNavgitor
  },
  {
    contentOptions:{
      activeTintColor:Colors.accent
    }
  }
  
  )




export default createAppContainer(drawerNavgatior);
