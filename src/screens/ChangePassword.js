import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';

const ChangePassword = ({navigation}) => {
  const {state, signout} = useContext(AuthContext);
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
      <Text style={styles.header}>Change Password</Text>
      <Input
         placeholder="NULL"
         onChangeText={setOldPassword}
         value={oldPassword}
         label="Old Password"
         leftIcon={<Icon name="lock" type="font-awesome" size={24} />}
         autoCorrect={false}
         secureTextEntry
         autoCapitalize="none"
       />
       <Input
          placeholder="NULL"
          onChangeText={setNewPassword1}
          value={newPassword1}
          label="New Password"
          leftIcon={<Icon name="lock" type="font-awesome" size={24} />}
          autoCorrect={false}
          secureTextEntry
          autoCapitalize="none"
        />
        <Input
           placeholder="NULL"
           onChangeText={setNewPassword2}
           value={newPassword2}
           label="Confirm New Password"
           leftIcon={<Icon name="lock" type="font-awesome" size={24} />}
           autoCorrect={false}
           secureTextEntry
           autoCapitalize="none"
         />
      <Button onPress={console.log("Time to change password")}
        title="Change Password" type="clear" />
      <Button onPress={() => navigation.navigate("Profile")}
          title="Back to Profile" type="clear" />
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

export default ChangePassword;
