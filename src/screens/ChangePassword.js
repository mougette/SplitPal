import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';
import {Put} from '../components/RestPut';

const ChangePassword = ({navigation}) => {
  const {state, signout} = useContext(AuthContext);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

  function handleEditClick() {
    console.log("updating password")
    Put("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/profile/changepassword",
                JSON.stringify({
                 userEmail: state.email,
                 oldPassword: oldPassword,
                 newPassword1: newPassword1,
                 newPassword2: newPassword2,
               }))
               console.log(JSON.stringify({
                userEmail: state.email,
                oldPassword: oldPassword,
                newPassword1: newPassword1,
                newPassword2: newPassword2,
              }));
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
      <Button onPress={handleEditClick}
        title="Change Password" type="clear" />
      <Button onPress={() => navigation.navigate("ProfileScreen")}
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
