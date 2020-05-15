export default (size = 10000) =>
  new Array(size).fill('').map((_, index) => ({
    name: `Test - ${index}`,
  }));
