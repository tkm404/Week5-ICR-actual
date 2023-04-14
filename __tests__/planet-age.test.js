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
  test('should correctly return age in Venus, Mars, and Jupiter years // Venus = Earth / .62; Mars = Earth / 1.88; Jupiter = Earth / 11.86 //', () => {
    expect(tomCalculator.earth).toEqual(31);
    expect(tomCalculator.mercury).toEqual(129.17);
    expect(tomCalculator.venus).toEqual(50);
    expect(tomCalculator.mars).toEqual(16.49);
    expect(tomCalculator.jupiter).toEqual(2.61);
  });
  // test('should correctly return how many years have passed between a past age and a current age', () => {
  //   expect(tomCalculator.yearsPassed(18)).toEqual("13 Earth years have passed.")
  // });
  test('should correctly return how many years have passed between a past age and current age on each planet', () => {
    expect(tomCalculator.yearsPassed(18)).toEqual("13 Earth years have passed. 54.17 Mercury years have passed. 20.97 Venus years have passed. 6.91 Mars years have passed. 1.1 Jupiter years have passed.")
  })
});