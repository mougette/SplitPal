import React, { useState, useEffect, useContext } from 'react';
import {View, Text, StyleSheet, Button, TextInput, FlatList, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Get} from '../components/RestGet';
import Entry from "../components/EntryComponent";
import SearchAndAdd from "../components/SearchAndAddComponent";
import {Icon} from "react-native-elements";
import {Post} from '../components/RestPost';
import { Context as AuthContext } from "../context/AuthContext";

const AddGroups = ({navigation}) => {

  const [groupName, setGroupName] = useState('');
  const { state, setState2 } = useContext(AuthContext);
      const [DATA2, setDATA2] = useState("");
      const [usersToAdd, setUsersToAdd] = useState([state.email]);
      useEffect(() => {
      Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/friend","?user="+state.email)
         .then(response => setDATA2(JSON.parse(response)));
      },[]);
  const updateUsers = (userEmail) => {
    let copy = usersToAdd
    let index = copy.indexOf(userEmail);
    if(index == -1){
        copy.push(userEmail);
    }
    else{
    copy.splice(index,1);
    }
    setUsersToAdd(copy);
  }
  const renderItem = ( {item,index} ) => {
  console.log(item)
    return (
        <Entry
            image='https://reactnative.dev/img/tiny_logo.png'
            name={item.FirstName+item.LastName}
            balance="groups"
            onPress = { () => {updateUsers(item.Email); console.log(usersToAdd)} }
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
          <TouchableOpacity onPress={() => Post("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/group-view",
                                                                                         JSON.stringify({
                                                                                          userEmail: state.email,
                                                                                          usersAdded: usersToAdd,
                                                                                          groupName: groupName,
                                                                                          }))}>
            <Text style={styles.blueTextButton}> Create Group </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.master}>
          <Text style={styles.subHeader}>Add Members</Text>
          <SafeAreaView style={[styles.containerTop, {alignItems: 'center'}]}>
            <FlatList
                data={DATA2}
                renderItem={renderItem}
                keyExtractor = {(item, index) => index.toString()}
                extraData={DATA2}
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
