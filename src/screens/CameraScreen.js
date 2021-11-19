import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import { Camera } from 'expo-camera';
import {Context as AuthContext} from '../context/AuthContext';

const CameraScreen = ({navigation}) => {
  const {state, signout} = useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  const takePicture = async () => {
      if (!camera) return
      const photo = await camera.takePictureAsync({
                    base64: true,
                  })
      console.log(photo)
      setCapturedImage(photo)
      console.log(photo)

    };
    const submitPicture = async() =>{
    const accept = await takePicture();
    navigation.navigate('ImageConfirm',{'photo': accept});
    }

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={(r) => {
            camera = r
            onCameraReady=console.log("ready")
          }}>
          <View style={styles.link}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={submitPicture}>
              <Text style={styles.text}> Take Picture </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "gray",
    marginLeft: 30,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});

export default CameraScreen;
