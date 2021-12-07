import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView, FlatList } from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';

const Transactions = ({route, navigation}) => {
  const {itemEmail} = route.params;
  const {state, signout} = useContext(AuthContext);
  const [DATA, setDATA] = useState("");

  const renderItem = ( {item,index} ) => {
    return (
        <Entry
            image='https://reactnative.dev/img/tiny_logo.png'
            name={item.FirstName+" "+item.LastName}
            balance={item.Balance.toString()}
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

    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginBottom: 8,
    marginTop: 20,
  },
});

export default Transactions;
