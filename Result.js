// @flow

import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import WakeUpTimes from './WakeUpTimes';
import { DateTime } from 'luxon';

type Props = {
  goToBedTime: DateTime,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
  },
});

class Result extends React.Component<Props> {
  render() {
    const { goToBedTime } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          If you go to bed at {goToBedTime.toLocaleString(DateTime.TIME_SIMPLE)}
        </Text>
        <Text style={styles.text}>you should wake up at</Text>
        <WakeUpTimes goToBedTime={goToBedTime} />
      </View>
    );
  }
}

export default Result;
