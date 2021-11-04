import React, { useState, useEffect, useContext } from 'react';
import {View, Text, StyleSheet, Button, TextInput, FlatList, SafeAreaView, TouchableOpacity, ImageBackground} from 'react-native';
import Entry from "../components/EntryComponent";
import AddFriendBar from "../components/AddFriendBar";
import {Get} from '../components/RestGet';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';
import { Context as AuthContext } from "../context/AuthContext";


const AddFriend = ({navigation}) => {
    const { state, setState2 } = useContext(AuthContext);
    const [DATA2, setDATA2] = useState("");
    useEffect(() => {
    Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_1/friend-request","?user="+state.email)
       .then(response => setDATA2(JSON.parse(response)));
    },[]);
  const renderItem = ( {item, index} ) => {
    return (
        <Entry
            image='https://reactnative.dev/img/tiny_logo.png'
            name={item.FirstName+item.LastName}
            balance={item.Balance}
            onPress = { () => console.log("Yo!") }
        ></Entry>
    );
  };
  return (
    <View style={styles.master}>
    <View style={{ alignItems: "center", marginTop: 10 }}>
                  <SplitPalLogoComponent/>
     </View>
        <AddFriendBar search={"Enter Friend's Email"} button = {"Add Friend"} email={state.email}/>
        <Text style={styles.header}>Pending Requests</Text>
        <SafeAreaView style={styles.containerBot}>
          <FlatList
              data={DATA2}
              renderItem={renderItem}
              keyExtractor = {(item, index) => index.toString()}
          />
              <TouchableOpacity onPress={() => navigation.navigate("Friend")}>
                    <Text style={styles.blueText}>Back.</Text>
              </TouchableOpacity>
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
  blueText: {
      fontSize: 16,
      marginTop: 16,
      color: '#349beb',
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