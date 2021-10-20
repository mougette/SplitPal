import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Split = ({navigation}) => {
  return (
    <View style={styles.master}>
      <Text style={styles.header}>TODO: Split Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
  },
});

export default Split;
