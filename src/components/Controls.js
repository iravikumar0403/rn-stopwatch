import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTimer } from '../context/timer-context';

export default function Controls() {
  const { isTimerRunning, startTimer, stopTimer, createLap, resetTimer } =
    useTimer();

  return (
    <View style={styles.btnGroup}>
      {isTimerRunning ? (
        <Button title="lap" onPress={createLap} />
      ) : (
        <Button title="start" onPress={startTimer} />
      )}
      <Button title="stop" onPress={stopTimer} />
      <Button title="reset" onPress={resetTimer} />
    </View>
  );
}

const styles = StyleSheet.create({
  btnGroup: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    marginBottom: 60,
  },
});
