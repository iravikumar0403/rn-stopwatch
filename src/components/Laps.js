import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { format2digits } from '../utils';
import { useTimer } from '../context/timer-context';

export default function Laps() {
  const { laps } = useTimer();

  return (
    <View style={styles.scrollview}>
      {laps.length > 0 && (
        <View style={styles.lapitem}>
          <Text style={styles.lapheader}>Lap</Text>
          <Text style={styles.lapheader}>Lap time</Text>
        </View>
      )}
      <FlatList
        data={laps}
        renderItem={({ index, item }) => {
          return (
            <View style={styles.lapitem}>
              <Text>{laps.length - index}</Text>
              <Text>
                {format2digits(item.hh)} : {format2digits(item.mm)} :{' '}
                {format2digits(item.ss)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    width: 250,
    padding: 10,
    maxHeight: 400,
  },
  lapitem: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  lapheader: {
    fontSize: 16,
    paddingVertical: 10,
    color: '#fefefe',
  },
});
