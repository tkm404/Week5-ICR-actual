import Calculator from './../src/planet-age.js'


describe('Calculator', () => {
  let tomCalculator;
  beforeEach(() => { 
    tomCalculator = new Calculator(31);
  });
  test('should correctly create a calculator object that returns a given age in Earth Years', () => {
    expect(tomCalculator.earth).toEqual(31);
  });
  test('should correctly return age in Mercury Years //Earth Years / .24 //', () => {
    expect(tomCalculator.earth).toEqual(31);
    expect(tomCalculator.mercury).toEqual(129.17);
  });
});