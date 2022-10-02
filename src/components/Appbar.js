import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Appbar = () => {
  return (
    <View style={styles.appbar}>
      <Text style={styles.apptitle}>Stopwatch</Text>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: 'coral',
    padding: 15,
    alignItems: 'center',
  },
  apptitle: {
    color: '#fefefe',
    fontSize: 20,
  },
});
