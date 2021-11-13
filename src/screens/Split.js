import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import SplitPalLogoComponent from '../components/SplitPalLogoComponent';

class Split extends Component {

  constructor(props){
    super(props);
    this.friend = props.route.params[0].item
    this.state = {
      textInput : [],
      inputData : []
    }
  }

  //function to add TextInput dynamically
  addTextInput = (index) => {
    let textInput = this.state.textInput;
    textInput.push(<View key = {index} style= {styles.row}>
    <TextInput style={styles.input}
      onChangeText={(text) => this.addValues(text, index, true)} />
      <TextInput style={styles.input2}
            onChangeText={(text) => this.addValues(text, index, false)} />
      </View>
      );
    this.setState({ textInput });
  }

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput,inputData });
  }

  //function to add text from TextInputs into single array
  addValues = (text, index, item) => {
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0){
        for(let i = 0; i< dataArray.length; i++){
         if(i === index){
            if(item)
                dataArray[i].item = text;
            else
                dataArray[i].price = text;
            checkBool = true;
         }
        }
    }
    if (checkBool){
    this.setState({
      inputData: dataArray
    });
  }
  else {
    let owedArray = [this.friend.Email]
    dataArray.push({'item': "NULL",'price':"NULL", 'usersOwed' : owedArray});
    this.setState({
      inputData: dataArray
    });
  }
  }

  //function to console the output
  getValues = () => {
    console.log('Data',this.state.inputData);
  }


  render(){
    return(
      <View style={styles.master}>
      <SplitPalLogoComponent/>
      <View style= {styles.row}>
      <Text style={{color: "black", fontSize: 25, marginRight:10}}>Item</Text>
      <Text style={{color: "black", fontSize: 25, marginLeft: 170}}>Price</Text>
      </View>
      <ScrollView style={styles.containerBot}>
      {this.state.textInput.map((value) => {
                return value
              })}
        <View style= {styles.row}>
          <View style={{margin: 10}}>
        <TouchableOpacity style={styles.blueTextButton} onPress={() => this.addTextInput(this.state.textInput.length)}>
                        <Text style={{color: "black", fontSize: 18}}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={{margin: 10}}>
        <TouchableOpacity style={styles.blueTextButton} onPress={() => this.removeTextInput()}>
                        <Text style={{color: "black", fontSize: 18}}>Remove</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
        <View style={{width: "40%", padding: 20}}>
        <TouchableOpacity style={styles.blueTextButton} onPress={() => this.getValues()}>
                        <Text style={{color: "black", fontSize: 25}}>Submit</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  master: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#87a1b6'
    },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonView: {
  flexDirection: 'row'
  },
  containerBot: {
    flex: 1,
    marginTop: 0,
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
  textInput: {
  height: 40,
  borderColor: 'black',
  borderWidth: 1,
  margin: 20
},
input: {
        width: '60%',
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        backgroundColor: 'white',
    },
input2: {
        width: '30%',
        marginTop: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        backgroundColor: 'white',
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
row:{
  flexDirection: 'row',
  justifyContent: 'center'
  },
});

export default Split;