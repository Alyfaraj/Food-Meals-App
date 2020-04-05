import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';

const CategoryGridItem=props=>{
    return(
    <TouchableOpacity
    style={styles.gridItem}
    onPress={props.onSelect}>
    <View  style={{...styles.ItemContiner,...{backgroundColor:props.backGcolor}}}>
    
      <Text style={styles.title}>{props.title}</Text>
    </View>
  </TouchableOpacity>)
}
const styles=StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10,
        overflow:'hidden'
      },
      ItemContiner:{
        flex:1,
        padding:15,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        borderRadius:10,
        elevation:3,
        shadowColor:'#ccc',
        shadowOpacity:6
      },
      title:{
          fontFamily:'open-sans-bold',
          fontSize:18
      }
});
export default CategoryGridItem;
