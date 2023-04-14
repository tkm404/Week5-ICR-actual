

export default class Calculator {
  constructor(earthyears) {
    this.earth = earthyears;
    let mercuryYears = parseFloat(earthyears / .24).toFixed(2);
    let venusYears = parseFloat(earthyears / .62).toFixed(2);
    let marsYears = parseFloat(earthyears / 1.88).toFixed(2);
    let jupiterYears = parseFloat(earthyears / 11.86).toFixed(2);

    this.mercury = parseFloat(mercuryYears);
    this.venus = parseFloat(venusYears);
    this.mars = parseFloat(marsYears);
    this.jupiter = parseFloat(jupiterYears);
  }
  yearsPassed(pastAge) {
    let yearsPassed = this.earth - pastAge;
    let mercuryPassed = parseFloat(yearsPassed / .24).toFixed(2);
    let venusPassed = parseFloat(yearsPassed / .62).toFixed(2);
    let marsPassed = parseFloat(yearsPassed / 1.88).toFixed(2);
    let jupiterPassed = parseFloat(yearsPassed / 11.86).toFixed(2);

    let mercuryPast = parseFloat(mercuryPassed);
    let venusPast = parseFloat(venusPassed);
    let marsPast = parseFloat(marsPassed);
    let jupiterPast = parseFloat(jupiterPassed);

    return `${yearsPassed} Earth years have passed. ${mercuryPast} Mercury years have passed. ${venusPast} Venus years have passed. ${marsPast} Mars years have passed. ${jupiterPast} Jupiter years have passed.`;
  }
  yearsAhead(futureAge) {
    let yearsToGo = futureAge - this.earth;
    let mercuryAhead = parseFloat(yearsToGo / .24).toFixed(2);
    let venusAhead = parseFloat(yearsToGo / .62).toFixed(2);
    let marsAhead = parseFloat(yearsToGo / 1.88).toFixed(2);
    let jupiterAhead = parseFloat(yearsToGo / 11.86).toFixed(2);

    let mercuryFuture = parseFloat(mercuryAhead);
    let venusFuture = parseFloat(venusAhead);
    let marsFuture = parseFloat(marsAhead);
    let jupiterFuture = parseFloat(jupiterAhead);

    return `${yearsToGo} Earth years have yet to pass. ${mercuryFuture} Mercury years have yet to pass. ${venusFuture} Venus years have yet to pass. ${marsFuture} Mars years have yet to pass. ${jupiterFuture} Jupiter years have yet to pass.`;
  }
}