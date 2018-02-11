// @flow

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { DateTime, Duration } from 'luxon';

type Props = {
  goToBedTime: DateTime,
};

type CalculateWakeUpTimes = (params: {
  goToBedTime: DateTime,
  fallAsleep?: number,
}) => Array<{
  cycle: number,
  dateTime: DateTime,
}>;

const DEFAULT_FALL_ASLEEP = 14; // always in minutes.
const NUM_OF_CYCLE = 7;
const CYCLE_LENGTH = 90; // always in minutes.
const RECOMMENDED_MIN_CYCLE = 5;

const calculateWakeUpTimes: CalculateWakeUpTimes = ({
  goToBedTime,
  fallAsleep: fallAsleep = DEFAULT_FALL_ASLEEP,
}) => {
  let times = [];
  let time = goToBedTime.plus({ minutes: fallAsleep });
  for (let i = 1; i <= NUM_OF_CYCLE; i++) {
    time = time.plus({ minutes: CYCLE_LENGTH });
    times.push({
      cycle: i,
      dateTime: time,
    });
  }
  return times;
};

type CalculateSleepDuration = (params: {
  goToBedTime: DateTime,
  wakeUpTime: DateTime,
  fallAsleep?: number,
}) => Duration;

const calculateSleepDuration: CalculateSleepDuration = ({
  goToBedTime,
  wakeUpTime,
  fallAsleep: fallAsleep = DEFAULT_FALL_ASLEEP,
}) => {
  const start = goToBedTime.plus({ minutes: fallAsleep });
  return wakeUpTime.diff(start, ['hours', 'minutes']);
};

const isRecommendedCycle = (cycle: number): boolean =>
  cycle >= RECOMMENDED_MIN_CYCLE;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  time: {
    marginTop: 10,
  },
  recommendedCycleText: {
    color: 'aqua',
  },
});

class WakeUpTimes extends React.Component<Props> {
  render() {
    const { goToBedTime } = this.props;
    const wakeUpTimes = calculateWakeUpTimes({ goToBedTime });
    return (
      <View>
        <FlatList
          data={wakeUpTimes}
          keyExtractor={(item) => item.cycle.toString()}
          renderItem={({ item }) => {
            const textStyle = isRecommendedCycle(item.cycle)
              ? [styles.text, styles.recommendedCycleText]
              : [styles.text];
            return (
              <View style={styles.time}>
                <Text style={textStyle}>
                  {item.dateTime.toLocaleString(DateTime.TIME_SIMPLE)}
                </Text>
                <Text style={textStyle}>
                  Nap for{' '}
                  {calculateSleepDuration({
                    goToBedTime,
                    wakeUpTime: item.dateTime,
                  }).toFormat("hh 'hour(s), ' mm 'minute(s)'")}
                </Text>
                <Text style={textStyle}>{item.cycle} cycle(s)</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default WakeUpTimes;
