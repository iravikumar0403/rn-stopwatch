import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {format2digits} from '../utils';
import {useTimer} from '../context/timer-context';

const Timer = () => {
  const {time} = useTimer();
  const {hh, mm, ss} = time;

  return (
    <Text style={styles.watch}>
      {format2digits(hh)} : {format2digits(mm)} : {format2digits(ss)}
    </Text>
  );
};

export default Timer;

const styles = StyleSheet.create({
  watch: {
    fontSize: 36,
    color: '#fefefe',
    paddingVertical: 20,
  },
});
