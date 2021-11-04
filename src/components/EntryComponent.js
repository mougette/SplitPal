import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { StyleSheet, Text, View } from 'react-native';

const Entry = (props) => {

    let color = (props.balance.startsWith("-")) ? "#bb2a2a" : "#2abb42"
    if (props.balance === "Pending") {
        color = "grey"
    }
    else if (props.balance === "Accept" || props.balance === "Split" || props.balance === "Add") {
        color = "#2a56a9"
    }

    return(
        <View style={styles.listItem}>
            <Image source ={{uri: props.image}}
                   style={{width:60, height:60,borderRadius:30}} />
            <View style={{alignItems:"center", justifyContent: 'center', flex:1}}>
                <Text style={{fontWeight:"bold"}}>{props.name}</Text>
            </View>
            <TouchableOpacity style={[styles.textButton, {backgroundColor: color}]} onPress={props.onPress}>
                <Text style={{color: "white", fontSize: 18}}>{props.balance}</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 300,
        margin: 10,
        backgroundColor: '#ffffff',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '100%',
        borderRadius: 4,
    },
    listItem:{
        backgroundColor: "#f5f5f5",
        padding: 10,
        marginVertical: 8,
        width:400,
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

export default Entry;