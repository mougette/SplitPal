import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import {
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { StyleSheet, Text, View } from 'react-native';

const GroupEntry = (props) => {
const [groupStatus, setGroupStatus] = useState(true);
    const buttonPress = () =>{
    setGroupStatus(!groupStatus)
    props.onPress();
    }
    return(
        <View style={[styles.listItem, {backgroundColor: groupStatus ? "#f5f5f5": "#2a56a9"}]}>
        <TouchableOpacity onPress = {buttonPress}>
            <Image source ={{uri: props.image}}
                   style={{width:20, height:20,borderRadius:30}} />
            <View style={{alignItems:"center", justifyContent: 'center', flex:1}}>
                <Text style={{fontWeight:"bold", color: groupStatus ? "#000" : "#fff"}}>{props.name}</Text>
            </View>
         </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        borderRadius: 4,
    },
    listItem:{
        padding: 10,
        marginVertical: 8,
        width:100,
        flexDirection:"row",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 7,
        overflow: "hidden",
        padding: 10,
        marginLeft: 10,
        width: '30%',
        color: '#2196F3',
        backgroundColor: '#2abb42',
        alignItems: "center",
    },
});

export default GroupEntry;