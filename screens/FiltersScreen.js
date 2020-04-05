import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';


const FilterSwitch = props => {
  return (
    <View style={styles.swithText}>
    <Text>{props.label}</Text>
    <Switch
      trackColor={{ true: '#744ea1' }}
      thumbColor={ Colors.primary }
      value={props.state}
      onValueChange={props.onChange}
    />
  </View>)
}


const FiltersScreen = props => {
  const [isGlutenfree, setisGlutenfree] = useState(false);
  const [isLactosfree, setisLactosfree] = useState(false);
  const [isVeganfree, setisVeganfree] = useState(false);
  const [isVegetrianfree, setisVegetrianfree] = useState(false);
  const {navigation}=props

  const saveFilters=useCallback(()=>{
    const appliedFilters={
      isGluten:isGlutenfree,
      isLactos:isLactosfree,
      isVegan:isVeganfree,
      isVegetrian:isVegetrianfree
    };
    console.log(appliedFilters)
  },[isVeganfree,isLactosfree,isVegetrianfree,isGlutenfree]);


  useEffect(()=>{
   navigation.setParams({save:saveFilters});
  },[saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch 
      label='Gluten-free'
      state={isGlutenfree}
      onChange={value=>{setisGlutenfree(value)}}
      />
      <FilterSwitch 
      label='Lactos-free'
      state={isLactosfree}
      onChange={value=>{setisLactosfree(value)}}
      />
      <FilterSwitch 
      label='Vegan-free'
      state={isVeganfree}
      onChange={value=>{setisVeganfree(value)}}
      />
      <FilterSwitch 
      label='Vegetrian-free'
      state={isVegetrianfree}
      onChange={value=>{setisVegetrianfree(value)}}
      />
    </View>
  );
};



FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filters',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item title='Menu'
          iconName='ios-menu'
          onPress={() =>
            navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>,
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item title='Save'
          iconName='ios-save'
          onPress={
            navData.navigation.getParam('save')}
        />
      </HeaderButtons>
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    marginVertical: 10
  },
  swithText: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
    marginVertical:10
  }
});

export default FiltersScreen;
