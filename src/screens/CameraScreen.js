import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import { Camera } from 'expo-camera';
import {Context as AuthContext} from '../context/AuthContext';

const CameraScreen = ({ route,navigation}) => {
  const {state, signout} = useContext(AuthContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [load, setLoad] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
   const { item } = route.params;
  const takePicture = async () => {
      if (!camera) return
      const photo = await camera.takePictureAsync({
                    quality : 0.1,
                    base64: true,
                  })
      setCapturedImage(photo)
          navigation.navigate('ImageConfirm',{'photo': photo, 'item': item});

    };
    const submitPicture = async() =>{
    const accept = takePicture();
    }
    navigation.addListener('focus', () => {
          setLoad(true);
        });
    navigation.addListener('blur', () => {
          setLoad(false);
        });

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    if (hasPermission === null) {
      return <View />;
    }
    else if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    else if(load){
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={(r) => {
            camera = r
          }}>
          <View style={styles.link}>
            <TouchableOpacity
              style={styles.smallbutton}
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
              onPress={takePicture}>
              <Text style={styles.text}> Snap Picture </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
    }
  else{
  return <View />;
  }
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
    marginLeft: 75,
    width:80,
    height:80,
    borderRadius:90,
    justifyContent: 'center',
  },
  smallbutton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: "gray",
    marginLeft: 30,
    width:50,
    height:50,
    borderRadius:60,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  link: {
    flexDirection: 'row',

    flex: 1,
  },
});

export default CameraScreen;
