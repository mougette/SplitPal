import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SplitPalLogoComponent extends Component {

  render = () => {
    return (
      <View style={styles.master}>
        <Text style={styles.headerBlue}>Split</Text>
        <Text style={styles.headerGray}>Pal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  master: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerBlue: {
    fontSize: 48,
    marginBottom: 18,
    color: '#3B5AAA',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  headerGray: {
      fontSize: 48,
      marginBottom: 18,
      color: '#454851',
      alignSelf: 'center',
      fontWeight: 'bold',
    },
});

export default SplitPalLogoComponent;