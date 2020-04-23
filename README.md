# React Native Scaled Sheet

A React Native interceptor for StyleSheet to scale sizes based in screen dimensions.

## Installation

react-native-scaled-sheet is available on npm/yarn:

```bash
$ npm install react-native-scaled-sheet --save
$ yarn add react-native-scaled-sheet
```

## Usage

```js
import ScaledSheet from 'react-native-scaled-sheet';

const styles = ScaledSheet.create({
  container: {
    height: 50, // => scaleSize(50)
    width: 50, // => scaleSize(50)
    fontSize: 14, // => scaleFont(14)
  },
});

// OR:

import { StyleSheet } from 'react-native';
import { scaleSize, scaleFont } from 'react-native-scaled-sheet';

const styles = ScaledSheet.create({
  container: {
    height: scaleSize(50),
    width: scaleSize(50),
    fontSize: scaleFont(14),
  },
});
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Bugs and Sugestions

Report bugs or do suggestions using the [issues](https://github.com/helderburato/react-native-scaled-sheet/issues).

## License

[MIT License](LICENSE) © [helderburato](https://github.com/helderburato)
