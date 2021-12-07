import React, { useState, useContext, useEffect } from 'react';
import {View, Text, StyleSheet, Button, TextInput, FlatList, SafeAreaView, TouchableOpacity, ImageBackground, Alert} from 'react-native';
import Entry from "../components/EntryComponent";
import SearchAndAdd from "../components/SearchAndAddComponent";
import {Get} from '../components/RestGet';
import Patch from '../components/RestPatch';
import { Context as AuthContext } from "../context/AuthContext";


const Friends = ({navigation}) => {
const { state, setState2 } = useContext(AuthContext);
const [DATA, setDATA] = useState("");
const [DATA2, setDATA2] = useState("");
useEffect(() => {
const unsubscribe = navigation.addListener('focus', () => {
Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/friend","?user="+state.email)
   .then(response => setDATA(JSON.parse(response)));
Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/friend-request","?user="+state.email)
   .then(response => setDATA2(JSON.parse(response)));
   });
     return unsubscribe
},[navigation]);
  const renderItem = ( {item,index} ) => {
  if(item.Balance == "Accept"){
  return (
          <Entry
              image='https://reactnative.dev/img/tiny_logo.png'
              name={item.FirstName+item.LastName}
              balance={item.Balance}
              onPress = { () => {
              Alert.alert(
                  "Accept friend request?",
                  "",
              [
              {
              text: "Yes",
              onPress: () =>{
              Patch("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/friend-request",
              JSON.stringify({
                    userEmail: state.email,
                    friendEmail: item.Email,
                    accepted : "1",
                    }));
              setTimeout(() => {
                  Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/friend","?user="+state.email)
                  .then(response => setDATA(JSON.parse(response)));
                  console.log(DATA)
                  Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/friend-request","?user="+state.email)
                  .then(response => setDATA2(JSON.parse(response)));
                  console.log(DATA2)
                  }, 2000);
                    },
              },
              {
                            text: "No",
                            onPress: () =>{
                            Patch("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_1/friend-request",
                            JSON.stringify({
                                  userEmail: state.email,
                                  friendEmail: item.Email,
                                  accepted : "0",
                                  }));

                            setTimeout(() => {
                            Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_1/friend","?user="+state.email)
                               .then(response => setDATA(JSON.parse(response)));
                             console.log(DATA)
                            Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_1/friend-request","?user="+state.email)
                               .then(response => setDATA2(JSON.parse(response)));
                               console.log(DATA2)
                                  }, 2000);
                                  },
              },
              ]
              );
              }
              }
          ></Entry>
      );
  }
  else if(item.Balance == "Split"){
      return (
          <Entry
              image='https://reactnative.dev/img/tiny_logo.png'
              name={item.FirstName+item.LastName}
              balance={item.Balance}
              onPress = { () => navigation.navigate("Split", [{item}, {state}, "NULL"]) }
          ></Entry>
      );
      }
  else{
    return (
        <Entry
            image='https://reactnative.dev/img/tiny_logo.png'
            name={item.FirstName+item.LastName}
            balance={item.Balance}
            onPress = { () => console.log("Yo!") }
        ></Entry>
    );
    }
  };

  return (
    <View style={styles.master}>
      <SearchAndAdd search={"Search Friends"} button={"Add Friend"} onPress = { () => navigation.navigate("Add Friends") } />
        <SafeAreaView style={styles.containerTop}>
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor = {(item, index) => index.toString()}
              extraData={DATA}
          />
        </SafeAreaView>
        <Text style={styles.header}>Pending Requests</Text>
        <SafeAreaView style={styles.containerBot}>
          <FlatList
              data={DATA2}
              renderItem={renderItem}
              keyExtractor = {(item, index) => index.toString()}
              extraData={DATA2}
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

export default Friends;
