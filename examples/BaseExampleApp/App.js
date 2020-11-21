import React from 'react';
import { Text, View } from 'react-native';
import ScaledSheet from './dist';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Welcome to the ScaledSheet!</Text>
      </View>
    </View>
  );
}

ScaledSheet.setLineBaseWidth(400);

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: 300,
    width: 300,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

console.log('styles', styles);
