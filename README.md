<h1 align="center">
  📏 ScaledSheet

  <br />
  <img alt="npm" src="https://img.shields.io/npm/v/react-native-scaled-sheet">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/react-native-scaled-sheet">
  <img alt="NPM" src="https://img.shields.io/npm/l/react-native-scaled-sheet">
</h1>

<p><strong><i>react-native-scaled-sheet</i> is a package for React Native</strong> whose goal is to calculate scale of styles values as the easiest way.</p>

```jsx
import ScaledSheet from 'react-native-scaled-sheet';

const styles = ScaledSheet.create({
  container: {
    height: 50, // => scaleSize(50)
    width: 50, // => scaleSize(50)
    fontSize: 14, // => scaleFont(14)
  },
});
```

---

## Motivation

- `Scale Styles:` Apply scales based on `PixelRatio` API to fonts and number values;
- `Intecept Styles`: Intercept every styles and apply the new calculate one;

---

## Usage

To get started using react-native-scaled-sheet, first install the package:

`yarn add react-native-scaled-sheet` or `npm i react-native-scaled-sheet`

<details>

<summary><strong>Update the line base width:</strong></summary>

```jsx
import ScaledSheet from 'react-native';

ScaledSheet.setLineBaseWidth(500);

const styles = ScaledSheet.create({
  container: {
    height: 50,
    width: 50,
    fontSize: 14,
  },
});
```

</details>

<details>
<summary><strong>Scale styles in the StyleSheet:</strong></summary>

```jsx
import { StyleSheet } from 'react-native';
import { scaleSize, scaleFont } from 'react-native-scaled-sheet';

const styles = StyleSheet.create({
  container: {
    height: scaleSize(50),
    width: scaleSize(50),
    fontSize: scaleFont(14),
  },
});
```

</details>

<details>
<summary><strong>Update existent styles to use the ScaleSheet:</strong></summary>

**BEFORE:**

```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    fontSize: 14,
  },
});
```

**AFTER:**

```jsx
import ScaledSheet from 'react-native-scaled-sheet';

const styles = ScaledSheet.create({
  container: {
    height: 50,
    width: 50,
    fontSize: 14,
  },
});
```

**Note: It's easier just update the `.create` to use from ScaleSheet and that's it!**

</details>

---

## Benchmark

The performance tests below show the comparison between using the StyleSheet offered by the React Native API and using ScaledSheet rendering 5k and 10k views. See the results:

| Library     | Rendering 5k Views | Rendering 10k Views |
| :---------- | :----------------: | :-----------------: |
| StyleSheet  |       2465ms       |       3185ms        |
| ScaledSheet |     **2515ms**     |     **3383ms**      |

See the test files in `examples/ExpoExampleApp`.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

[MIT License](LICENSE) © [helderburato](https://helderburato.com)
