import React, {useState, useContext} from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';

const SignupInfo = ({  navigation, route }) => {
    const { email, password, password2 } = route.params;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {state, signup} = useContext(AuthContext);

  return (
    <View style={styles.master}>

      <SplitPalLogoComponent />
      <Input
        placeholder="First Name"
        onChangeText={setFirstName}
        value={firstName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Last Name"
        onChangeText={setLastName}
        value={lastName}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title="Login"
        type="clear"
        onPress={() => {
            console.log("I SIGNED IN")
          signup({email, password, password2, firstName, lastName, phoneNumber});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    padding: 16,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    marginBottom: 18,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 16,
  },
  blueText: {
    fontSize: 16,
    marginTop: 16,
    color: '#349beb',
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SignupInfo;
