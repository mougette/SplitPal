import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, FlatList, SafeAreaView, TouchableOpacity, ImageBackground} from 'react-native';
import Entry from "../components/EntryComponent";
import SearchAndAdd from "../components/SearchAndAddComponent";
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';

const AddFriend = ({navigation}) => {

  const renderItem = ( item ) => {
    return (
        <Entry
            image='https://reactnative.dev/img/tiny_logo.png'
            name={item.item.name}
            balance={item.item.balance}
            onPress = { () => console.log("Yo!") }
        ></Entry>
    );
  };
const DATA2 = [
  {
    id: '1',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Sam',
    balance: 'Accept',
  },
  {
    id: '2',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    name: 'Max',
    balance: 'Pending',
  },
];
  return (
    <View style={styles.master}>
    <View style={{ alignItems: "center", marginTop: 10 }}>
                  <SplitPalLogoComponent/>
     </View>
        <SearchAndAdd search={"Enter Friend's Email"} button = {"Add Friend"} onPress = { () => console.log("add post here") } />
        <Text style={styles.header}>Pending Requests</Text>
        <SafeAreaView style={styles.containerBot}>
          <FlatList
              data={DATA2}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
   </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87a1b6'
  },
  header: {
    fontSize: 32,
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
    width: '60%',
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
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

export default AddFriend;
