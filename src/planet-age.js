

export default class Calculator {
    constructor(earthyears) {
    this.earth = earthyears;
    let mercuryYears = parseFloat(earthyears/.24).toFixed(2);
    this.mercury = parseFloat(mercuryYears)
    
    }
}