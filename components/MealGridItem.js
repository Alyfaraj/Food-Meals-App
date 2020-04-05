import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';
import Colors from '../constants/Colors';


const MealGridItem = props => {
    return (
        
        <View style={styles.mealItem}>
            <TouchableOpacity style={styles.itemHeader} onPress={props.onSelect}>
                <ImageBackground style={styles.imagepg} source={{ uri: props.img }}>
                    <Text style={styles.tobTitle} >{props.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
            <View style={styles.itemDetails}>
                <Text  >{props.duration}m</Text>
                <Text  >{props.complexity}</Text>
                <Text  >{props.affordability}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        width: '100%',
        height: 200,
        backgroundColor: '#ccc',
        borderRadius:10,
        overflow:'hidden',
        marginBottom:10
    },
    tobTitle: {
        width: '100%',
        height: '20%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        fontSize: 20,
        color: 'white',
        textAlign:'center',
        paddingVertical:5
    },
    row: {
        flexDirection: 'row',
        flex: 1
    },
    imagepg: {
        width: '100%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    itemHeader: {
        height: '85%',
        flex: 1
    },
    itemDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal:10,
        height:'15%',
        alignItems:'center'

    }
});

export default MealGridItem;