// @flow

import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import WakeUpTimes from './WakeUpTimes';
import { DateTime } from 'luxon';

type Props = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',

    // TODO: https://github.com/react-navigation/react-navigation/issues/1478
    // Hack to make sure top of the app doesn't overlap with Android's status bar.
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    color: 'white',
  },
});

export default class App extends React.Component<Props> {
  render() {
    const now = DateTime.local();
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          If you go to bed at {now.toLocaleString(DateTime.TIME_SIMPLE)}
        </Text>
        <Text style={styles.text}>you should wake up at</Text>
        <WakeUpTimes goToBedTime={now} />
      </View>
    );
  }
}
