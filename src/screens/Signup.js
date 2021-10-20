import React, {useState, useContext} from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const {state, signin} = useContext(AuthContext);

  return (
    <View style={styles.master}>

      <SplitPalLogoComponent />
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        leftIcon={<Icon name="envelope" type="font-awesome" size={24} />}
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        leftIcon={<Icon name="key" type="font-awesome" size={24} />}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Confirm Password"
        onChangeText={setPassword2}
        value={password2}
        leftIcon={<Icon name="key" type="font-awesome" size={24} />}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title="Login"
        type="clear"
        onPress={() => {
          signin({email, password});
        }}
      />
      <View style={styles.link}>
        <Text style={styles.text}>Dont have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.blueText}>Sign up Here.</Text>
        </TouchableOpacity>
      </View>
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

export default Signup;
