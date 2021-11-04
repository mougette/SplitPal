import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import Entry from "../components/EntryComponent";
import SearchAndAdd from "../components/SearchAndAddComponent";
import {Icon} from "react-native-elements";

const AddFriends = ({navigation}) => {

  const [email, setEmail] = useState('');

  return (
      <View style={styles.master}>
        <View style={styles.masterLogo}>
          <Text style={styles.headerBlue}>Add Fri</Text>
          <Text style={styles.headerGray}>ends</Text>
        </View>
        <View style={styles.master}>
          <Text style={styles.subHeader}> Search by Email</Text>
          <TextInput
              style={styles.input}
              placeholder= "example@example.com"
              onChangeText={setEmail}
              value={email}
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCorrect={false}
          />
        </View>
        <View style={styles.master}>
          <Text style={styles.subHeader}> Results will be in a flat list here with Send Request/Pending Button</Text>
        </View>
      </View>

  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    backgroundColor: '#87a1b6'
  },
  masterLogo: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#87a1b6'
  },
  headerBlue: {
    fontSize: 48,
    marginBottom: 10,
    color: '#3B5AAA',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  headerGray: {
    fontSize: 48,
    marginBottom: 10,
    color: '#454851',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  header: {
    fontSize: 32,
  },
  subHeader: {
    fontSize: 20,
    paddingLeft: 20,
  },
  blueTextButton: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 7,
    overflow: "hidden",
    padding: 10,
    marginLeft: 10,
    color: '#2196F3',
    backgroundColor: 'white',
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    marginLeft: 20,
    backgroundColor: 'white',
  },
  containerTop: {
    flex: 2,
    marginTop: 15,
  },
  containerBot: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    paddingHorizontal: '35%',
    borderRadius: 5,
  },
  image: {
    flex: 1,
        justifyContent: "center"
  },
});

export default AddFriends;
