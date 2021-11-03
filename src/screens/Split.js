import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView, ScrollView, TextInput, Button} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';
import Entry from "../components/EntryComponent";
import Post from '../components/RestPost';
import Get from '../components/RestGet';

const Split = ({navigation}) => {
  const {state} = useContext(AuthContext);
  const balance = 45.17
  const str = (balance > 0) ? "You are owed:" : "You owe:"
  const color = (balance > 0) ? "#2abb42" : "#bb2a2a"
  const [splitEmail, setSplitEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  return (
    <View style={styles.master}>
          <ScrollView>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <SplitPalLogoComponent/>
            </View>
              <View style={{ alignItems: "center", padding: 10 }}>
                <Text style={styles.textlabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setSplitEmail}
                  value={splitEmail}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
              <View style={{ alignItems: "center", padding: 10 }}>
                <Text style={styles.textlabel}>Amount</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setAmount}
                  value={amount}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            <View style={{ alignItems: "center", padding: 10 }}>
                <Text style={styles.textlabel}>Reason</Text>
                <TextInput
                  style={styles.inputReason}
                  onChangeText={setReason}
                  multiline
                  value={reason}
                  autoCapitalize="none"
                  autoCorrect={false}
              />
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button
                title="Submit"
                onPress={() => {
                  console.log("New Transaction Here");
                  }}
              />
            </View>
          </ScrollView>
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
  input: {
      height: 40,
      width: 150,
      margin: 12,
      borderWidth: 1,
      borderRadius: 3,
      padding: 10,
      backgroundColor: "#fff",
    },
    inputReason: {
          height: "30%",
          width: "95%",
          margin: 12,
          borderWidth: 1,
          borderRadius: 3,
          padding: 10,
          backgroundColor: "#fff",
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

export default Split;
