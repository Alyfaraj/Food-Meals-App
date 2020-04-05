import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridItem from '../components/CategoryGridItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';




const CategoriesScreen = props => {

  const renderItems = Listitem => {
    return (
      <CategoryGridItem onSelect={() => {
        props.navigation.navigate({
          routeName: 'CategoryMeals', 
          params: {
            CategoryId: Listitem.item.id
          }
        });
      }} title={Listitem.item.title}
        backGcolor={Listitem.item.color} />
    )


  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderItems}
      numColumns={2} />
  );
};



CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'meals',
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
    justifyContent: 'space-around',
    alignItems: 'center'
  },

});

export default CategoriesScreen;
