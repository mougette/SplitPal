import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Entry from '../components/EntryComponent.js';
import SearchAndAdd from "../components/SearchAndAddComponent";

const DATA = [
    {
        id: '1',
        image: 'https://reactnative.dev/img/tiny_logo.png',
        name: 'Roomies',
        balance: 'Split',
    },
    {
        id: '2',
        image: 'https://reactnative.dev/img/tiny_logo.png',
        name: 'Fam',
        balance: 'Split',
    },
    {
        id: '3',
        image: 'https://reactnative.dev/img/tiny_logo.png',
        name: 'Grand Canyon',
        balance: "Split",
    },
];

const Groups = ({navigation}) => {

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
          <SearchAndAdd search={"Search Groups"} button = {"Add Group"} onPress = { () => navigation.navigate("AddGroups") } />
          <SafeAreaView style={styles.containerTop}>
              <FlatList
                  data={DATA}
                  renderItem={renderItem}
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
    containerTop: {
        flex: 2,
        marginTop: 15,
    },
});

export default Groups;
