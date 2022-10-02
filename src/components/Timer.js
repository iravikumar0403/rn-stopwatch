import React, {useRef, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import useSound from '../hooks/useSound';
import {format2digits} from '../utils';

const Timer = () => {
  const [{hh, mm, ss}, setHhmmss] = useState({
    hh: 0,
    mm: 0,
    ss: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);
  const sound = useSound(require('../assets/alert.mp3'));

  const tick = () => {
    setHhmmss(prev => {
      if (prev.ss < 59) {
        return {...prev, ss: prev.ss + 1};
      } else if (prev.mm < 59) {
        if (sound) {
          sound.play();
        }
        return {...prev, mm: prev.mm + 1, ss: 0};
      } else {
        return {hh: prev.hh + 1, mm: 0, ss: 0};
      }
    });
  };

  const startTimer = () => {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    intervalId.current = setInterval(() => {
      tick();
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId.current);
    setIsRunning(false);
  };

  const reset = () => {
    setHhmmss({
      hh: 0,
      mm: 0,
      ss: 0,
    });
  };

  return (
    <View style={styles.timer}>
      <Text style={styles.watch}>
        {format2digits(hh)} : {format2digits(mm)} : {format2digits(ss)}
      </Text>
      <View style={styles.btnGroup}>
        <Button title="start" onPress={startTimer} />
        <Button title="stop" onPress={stopTimer} />
        <Button title="reset" onPress={reset} />
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  watch: {
    fontSize: 36,
    paddingVertical: 20,
  },
  btnGroup: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    marginBottom: 60,
  },
});
