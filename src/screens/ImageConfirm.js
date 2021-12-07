import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, Button, Navigation } from 'react-native';
import {Post} from '../components/RestPost';
import {Context as AuthContext} from '../context/AuthContext';

const ImageConfirm = ({ route, navigation}) => {
 const {state, signout} = useContext(AuthContext);
 const { photo } = route.params;
 const { stack } = route.params;
 const { item } = route.params;
 const imageParse = () => {
 Post("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/receipt-translate",
                                                                                          JSON.stringify({
                                                                                           image: photo.base64,
                                                                                           }))
        .then(response => stack == "group" ? navigation.navigate("SplitGroup") : navigation.navigate("Split", [{item}, {state}, response]));
 }
  return (
    <View style = {styles.master}>
        <View style={{height: 300, flex: 1,}}>
            <View style={styles.container}>
                <Image
                    resizeMode={'contain'}
                    style={styles.fill}
                    source={{uri: photo.uri}}
                    />

            </View>
            <View style={{height: 40,}}>
                <Button title = "Confirm" onPress = {imageParse}/>
            </View>
            <View style={{height: 40,}}>
                <Button title = "Retry" onPress = { () => navigation.navigate("CameraScreen"),{'item' : {item}} }/>
            </View>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "stretch",
    },
    fill: {
      width: null,
      height: null,
      flex: 1,

    },
    master: {
          flex: 1,
          backgroundColor: '#87a1b6'
        },

});
export default ImageConfirm;