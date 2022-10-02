import React from 'react';
import { StyleSheet, View } from 'react-native';
import Controls from './Controls';
import Laps from './Laps';
import Timer from './Timer';

const Stopwatch = () => {
  return (
    <View style={styles.timer}>
      <Timer />
      <Laps />
      <Controls />
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  timer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
});
