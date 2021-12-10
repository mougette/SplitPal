import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';
import {Get} from '../components/RestGet';
import {Put} from '../components/RestPut';

const Profile = ({navigation}) => {
  const {state, signout} = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const [changeButton, setChangeButton] = useState("Change Profile");
  const [newFirstName, setNewFirstName] = useState('NULL');
  const [newLastName, setNewLastName] = useState('NULL');
  const [newPhone, setNewPhone] = useState('1234567890');
  const [DATA, setDATA] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/profile","?email="+state.email)
        .then(response => {
          let resp = JSON.parse(response)
          console.log(resp)
          setNewFirstName(resp[0].firstName)
          setNewLastName(resp[0].lastName)
          setNewPhone(resp[0].phoneNumber)
        });
      });
      return unsubscribe
    }, [navigation]);


  function handleEditClick() {
    setDisabled(!disabled);
    if (disabled == true) {
      setChangeButton("Save Profile")
    }
    else {
      setChangeButton("Change Profile")
      console.log("/PUT updating profile info")
      Put("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/profile",
                  JSON.stringify({
                   userEmail: state.email,
                   newEmail: state.email,
                   firstName: newFirstName,
                   lastName: newLastName,
                   phoneNumber: newPhone,
                   profilePic: "NULL",
                 }))
    }
  }

  return (
    <View style={styles.master}>
      <SplitPalLogoComponent />
      <Text style={styles.header}>Welcome, {state.email}</Text>
      <Image source ={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
             style={{width:60, height:60,borderRadius:30}} />
      <Input
         placeholder="NULL"
         onChangeText={setNewFirstName}
         value={newFirstName}
         label="First Name"
         leftIcon={<Icon name="github" type="font-awesome" size={24} />}
         autoCorrect={false}
         disabled={disabled}
       />
       <Input
          placeholder="NULL"
          onChangeText={setNewLastName}
          value={newLastName}
          label="Last Name"
          leftIcon={<Icon name="github" type="font-awesome" size={24} />}
          autoCorrect={false}
          disabled={disabled}
        />
        <Input
           placeholder="NULL"
           onChangeText={setNewPhone}
           value={newPhone}
           label="Phone Number"
           leftIcon={<Icon name="phone" type="font-awesome" size={24} />}
           autoCorrect={false}
           disabled={disabled}
         />
      <Button onPress={handleEditClick} title={changeButton} type="clear" />
      <Button onPress={() => navigation.navigate("Change Password")}
        title="Change Password" type="clear" />
      <Button onPress={signout} title="Ready to Sign out?" type="clear" />
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 8,
    marginTop: -20,
  },
});

export default Profile;
