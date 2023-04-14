

export default class Calculator {
    constructor(earthyears) {
    this.earth = earthyears;
    let mercuryYears = parseFloat(earthyears/.24).toFixed(2);
    // let venusYears = parseFloat(earthyears/.62).toFixed(2);
    // let marsYears 
    // let jupiterYears
    this.mercury = parseFloat(mercuryYears)
    
    }
}