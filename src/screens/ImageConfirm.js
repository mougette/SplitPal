import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigation } from 'react-native';

const ImageConfirm = ({navigation},props) => {
  return (
    console.log(props.image)
    <View style = {styles.master}>
        <View style={{height: 300, flex: 1,}}>
            <View style={styles.container}>
                <Image
                    resizeMode={'contain'}
                    style={styles.fill}
                    source={props.image}
                    />

            </View>
            <View style={{height: 40,}}>
                <Button title = "Confirm" onPress = { () => navigation.navigate("SplitGroup") }/>
            </View>
            <View style={{height: 40,}}>
                <Button title = "Retry" onPress = { () => navigation.navigate("CameraScreen") }/>
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