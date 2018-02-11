// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Button,
} from 'react-native';
import Result from './Result';
import { DateTime } from 'luxon';

type Props = {};

type State = {
  currentPage: 'start' | 'result',
};

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
  startPage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backToStartButton: {
    marginTop: 10,
  },
});

export default class App extends React.Component<Props, State> {
  state = {
    currentPage: 'start',
  };

  render() {
    const { currentPage } = this.state;

    switch (currentPage) {
      case 'start':
        return (
          <View style={[styles.container, styles.startPage]}>
            <Button
              title="Sleep now"
              onPress={() => {
                this.setState({ currentPage: 'result' });
              }}
            />
            <Text style={styles.text}>
              Find out when to wake up if you sleep now.
            </Text>
          </View>
        );
      case 'result':
        return (
          <View style={styles.container}>
            <Result goToBedTime={DateTime.local()} />
            <Button
              title="Back to start"
              onPress={() => {
                this.setState({ currentPage: 'start' });
              }}
              style={styles.backToStartButton}
            />
          </View>
        );
      default:
        throw new TypeError('Invalid page');
    }
  }
}
