import React, { useState, useEffect, useContext } from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Entry from '../components/EntryComponent.js';
import {Get} from '../components/RestGet';
import SearchAndAdd from "../components/SearchAndAddComponent";
import { Context as AuthContext } from "../context/AuthContext";



const Groups = ({navigation}) => {
const { state, setState2 } = useContext(AuthContext);
const [DATA, setDATA] = useState("");
useEffect(() => {
const unsubscribe = navigation.addListener('focus', () => {
Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/group-view","?userEmail="+state.email)
   .then(response => setDATA(JSON.parse(response)));
   });
     return unsubscribe
},[navigation]);
    const renderItem = ( {item,index} ) => {
    console.log(item)
        return (
            <Entry
                image='https://reactnative.dev/img/tiny_logo.png'
                name={item.GroupName}
                balance="Split"
                onPress = { () => navigation.navigate("SplitGroup", [{item}, {state}, "NULL"]) }
            ></Entry>
        );
    };

  return (
      <View style={styles.master}>
          <SearchAndAdd search={"Search Groups"} button = {"Create Group"} onPress = { () => navigation.navigate("AddGroups") } />
          <SafeAreaView style={styles.containerTop}>
              <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor = {(item, index) => index.toString()}
                  extraData={DATA}
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
