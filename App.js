import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Appbar from './src/components/Appbar';
import Stopwatch from './src/components/Stopwatch';
import {TimerProvider} from './src/context/timer-context';

const App = () => {
  return (
    <TimerProvider>
      <SafeAreaView style={styles.view}>
        <View style={styles.view}>
          <Appbar />
          <Stopwatch />
        </View>
      </SafeAreaView>
    </TimerProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default App;
