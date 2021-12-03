import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';

const Profile = ({navigation}) => {
  const {state, signout} = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const [changeButton, setChangeButton] = useState("Change Profile");
  const {newFirstName, setNewFirstName} = useState('NULL');
  const {newLastName, setNewLastName} = useState('NULL');
  const {newPhone, setNewPhone} = useState('1234567890');
  const {oldPassword, setOldPassword} = useState('');
  const {newPassword1, setNewPassword1} = useState('');
  const {newPassword2, setNewPassword2} = useState('');

  function handleEditClick() {
    setDisabled(!disabled);
    disabled == true ? setChangeButton("Save Profile") : setChangeButton("Change Profile")
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
