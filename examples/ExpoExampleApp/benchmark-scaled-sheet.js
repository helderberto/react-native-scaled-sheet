/* eslint-disable react/no-array-index-key */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import ScaledSheet from './react-native-scaled-sheet';
import 'react-native-console-time-polyfill';

import createTestArray from './create-test-array';

const arr = createTestArray(10000);

const styles = ScaledSheet.create({
  container: {
    height: 100,
    width: 100,
    flex: 1,
  },
  text: {
    fontSize: 14,
  },
});

class TestScreen extends Component {
  componentDidMount() {
    console.timeEnd('ScaledSheet');
  }

  renderScrollView() {
    console.log(`ScaledSheet - Rendering ${arr.length} components.`);

    return (
      <ScrollView>
        {arr.map((row, index) => (
          <View style={styles.container} key={index}>
            <Text style={styles.text}>{row.name}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }

  render() {
    console.time('ScaledSheet');

    return this.renderScrollView();
  }
}

export default TestScreen;
