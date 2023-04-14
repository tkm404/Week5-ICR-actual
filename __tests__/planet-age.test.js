import Calculator from '../src/js/planet-age.js'


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
  test('should correctly return age in Venus, Mars, and Jupiter years // Venus = Earth / .62; Mars = Earth / 1.88; Jupiter = Earth / 11.86 //', () => {
    expect(tomCalculator.earth).toEqual(31);
    expect(tomCalculator.mercury).toEqual(129.17);
    expect(tomCalculator.venus).toEqual(50);
    expect(tomCalculator.mars).toEqual(16.49);
    expect(tomCalculator.jupiter).toEqual(2.61);
  });
  test('should correctly return how many years have passed between a past age and current age on each planet', () => {
    expect(tomCalculator.yearsPassed(18)).toEqual("13 Earth years have passed. 54.17 Mercury years have passed. 20.97 Venus years have passed. 6.91 Mars years have passed. 1.1 Jupiter years have passed.");
  });
  test('should correctly return how many years have yet to pass between the present and future on each planet', () => {
    expect(tomCalculator.yearsAhead(36)).toEqual("5 Earth years have yet to pass. 20.83 Mercury years have yet to pass. 8.06 Venus years have yet to pass. 2.66 Mars years have yet to pass. 0.42 Jupiter years have yet to pass.");
  });
});