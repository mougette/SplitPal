import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';
import Entry from "../components/EntryComponent";
import {Post} from '../components/RestPost';
import {Get} from '../components/RestGet';

const HomeScreen = ({navigation}) => {
  const {state} = useContext(AuthContext);
  const [DATA, setDATA] = useState("");
  const balance = DATA == "" ? DATA :DATA[0].TotalBalance
  const str = (balance > 0) ? "You are owed:" : "You owe:"
  const color = (balance > 0) ? "#2abb42" : "#bb2a2a"
  const isLoaded = navigation.isFocused()
  useEffect(() => {
  const unsubscribe = navigation.addListener('focus', () => {
  Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/balance","?userEmail="+state.email)
     .then(response => setDATA(response));
  });
  return unsubscribe
  },[navigation]);

  const renderItem = ( {item,index} ) => {
  console.log(item)
    return (
        <Entry
            image='https://reactnative.dev/img/tiny_logo.png'
            name={item.FirstName+" "+item.LastName}
            balance={item.Balance.toString()}
            onPress = {() => Post("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/transaction",
            JSON.stringify({sender: state.email,
                            groupID: "NULL",
                            transactions: [{item:"payment",
                                            amount:item.balance,
                                            usersOwed:item.Email}],}))}
        ></Entry>
    );
  };

  return (
    <View style={styles.master}>
      <SplitPalLogoComponent />
      <Text style={styles.header}>Grand Total</Text>

      <View style={styles.listItem}>
        <View style={{justifyContent: 'center', marginLeft: 25, flex:1}}>
          <Text style={{fontWeight:"bold"}}>{str}</Text>
        </View>
        <TouchableOpacity style={[styles.textButton, {backgroundColor: color}]}>
          <Text style={{color: "white", fontSize: 18}}>{DATA == "" ? DATA :DATA[0].TotalBalance}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.header2}>Running Totals</Text>

      <SafeAreaView style={styles.containerTop}>
        <FlatList
            data={DATA == "" ? DATA : DATA.splice(1)}
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
    backgroundColor: '#87a1b6',
  },
  header: {
    fontSize: 26,
    marginBottom: 10,
  },
  header2: {
    fontSize: 26,
    marginBottom: 0,
    marginTop: 10,
  },
  listItem:{
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical: 8,
    width:400,
    flexDirection:"row",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 7,
    overflow: "hidden",
    padding: 10,
    marginLeft: 10,
    width: '30%',
    color: '#2196F3',
    backgroundColor: '#2abb42',
    alignItems: "center",
  },
  containerTop: {
    flex: 2,
    marginTop: 15,
  },
});

export default HomeScreen;
