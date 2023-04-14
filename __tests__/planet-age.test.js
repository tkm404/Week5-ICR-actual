import Calculator from './../src/planet-age.js'


describe('Calculator', () => {
  test('should correctly create a calculator object that returns a given age in Earth Years', () => {
    const calculator = new Calculator(31)
    expect(calculator.earth).toEqual(31);
  });
});