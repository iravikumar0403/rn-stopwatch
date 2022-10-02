import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Appbar from './src/components/Appbar';
import Timer from './src/components/Timer';

const App = () => {
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.view}>
        <Appbar />
        <Timer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default App;
