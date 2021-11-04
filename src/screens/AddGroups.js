import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, FlatList, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Entry from "../components/EntryComponent";
import SearchAndAdd from "../components/SearchAndAddComponent";
import {Icon} from "react-native-elements";

const DATA = [
  {
    id: '1',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Eliot',
    balance: 'Add',
  },
  {
    id: '2',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Abby',
    balance: 'Add',
  },
  {
    id: '3',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Joe',
    balance: "Add",
  },
  {
    id: '4',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Kevin',
    balance: 'Add',
  },
  {
    id: '5',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Matt',
    balance: 'Add',
  },
  {
    id: '6',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Nick',
    balance: "Add",
  },
  {
    id: '7',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Steven',
    balance: 'Add',
  },
];

const AddGroups = ({navigation}) => {

  const [groupName, setGroupName] = useState('');

  const renderItem = ( item ) => {
    return (
        <Entry
            image={item.item.image}
            name={item.item.name}
            balance={item.item.balance}
            onPress = { () => console.log("Yo!") }
        ></Entry>
    );
  };

  return (
      <View style={styles.master}>
        <View style={styles.masterLogo}>
          <Text style={styles.headerBlue}>Create Gro</Text>
          <Text style={styles.headerGray}>ups</Text>
        </View>
        <View style={styles.masterLogo}>
          <Image source ={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                 style={{width: 120, height: 120,borderRadius:60}} />
        </View>
        <View style={styles.link}>
          <TextInput
              style={styles.input}
              placeholder= "Group Name"
              onChangeText={setGroupName}
              value={groupName}
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCorrect={false}
          />
          <TouchableOpacity onPress={() => console.log("Group Created")}>
            <Text style={styles.blueTextButton}> Create Group </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.master}>
          <Text style={styles.subHeader}>Add Members</Text>
          <SafeAreaView style={[styles.containerTop, {alignItems: 'center'}]}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />
          </SafeAreaView>
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
    paddingTop: 20,
  },
  input: {
    width: '50%',
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

export default AddGroups;
