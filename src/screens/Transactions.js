import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';
import Entry from "../components/EntryComponent";
import {Get} from '../components/RestGet';

const Transactions = ({route, navigation}) => {
  const {itemEmail} = route.params;
  const {state, signout} = useContext(AuthContext);
  const [DATA, setDATA] = useState("");

  useEffect(() => {
  const unsubscribe = navigation.addListener('focus', () => {
  Get("https://wt9b6sq6k1.execute-api.us-east-2.amazonaws.com/Iteration_2/transaction","?userEmail="+state.email+"&friendEmail="+itemEmail)
      .then(response => setDATA(JSON.parse(response)));
  });
  return unsubscribe
  },[navigation]);

  const renderItem = ( {item,index} ) => {
    return (
        <Entry
            image='https://reactnative.dev/img/tiny_logo.png'
            name={item.description}
            balance={item.amount.toString()}
            onPress = {() => console.log("TODO: Entry Pressed on Transactions Screen")}
        ></Entry>
    );
  };

  
  return (
    <View style={styles.master}>
      <SplitPalLogoComponent />

      <Image source ={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
             style={{width:60, height:60,borderRadius:30}} />

      <Text style={styles.header}>Your Transactions With, {itemEmail}:</Text>

      <SafeAreaView style={styles.containerTop}>
        <FlatList
            data={DATA == "" ? DATA : DATA.splice(1)}
            renderItem={renderItem}
            keyExtractor = {(item) => item.transactionID.toString()}
            extraData={DATA}
        />
      </SafeAreaView>

    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    backgroundColor: '#87a1b6',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 8,
    marginTop: 20,
  },
});

export default Transactions;
 