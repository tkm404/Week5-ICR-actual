

export default class Calculator {
    constructor(earthyears) {
    this.earth = earthyears;
    let mercuryYears = parseFloat(earthyears/.24).toFixed(2);
    let venusYears = parseFloat(earthyears/.62).toFixed(2);
    let marsYears = parseFloat(earthyears/1.88).toFixed(2);
    let jupiterYears = parseFloat(earthyears/11.86).toFixed(2);

    this.mercury = parseFloat(mercuryYears);
    this.venus = parseFloat(venusYears);
    this.mars = parseFloat(marsYears);
    this.jupiter = parseFloat(jupiterYears);
    }
    yearsPassed(pastAge) {
      
    }
}