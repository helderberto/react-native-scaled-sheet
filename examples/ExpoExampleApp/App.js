import React from 'react';
import { Text, View } from 'react-native';
import ScaledSheet from './react-native-scaled-sheet';

ScaledSheet.setLineBaseWidth(350);

console.log(ScaledSheet.getLineBaseWidth()); // => 350

const styles = ScaledSheet.create({
  container: {
    height: 100,
    width: 100,
  },
  text: {
    backgroundColor: 'black',
    fontSize: 16,
    color: 'white',
    padding: 20,
    ...ScaledSheet.absboluteFill,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A simple example of ScaledSheet.</Text>
    </View>
  );
}
