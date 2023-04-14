import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/planet-age.js';

function calculateAge(event) {
  event.preventDefault();
  const myAge = parseInt(document.querySelector("#myAge").value);
  const myAgeReturn = new Calculator(myAge);
  document.querySelector("#response").innerText = null;
  const pMerc = document.createElement("p");
  pMerc.append(myAgeReturn.mercury);
  const pVen = document.createElement("p");
  pVen.append(myAgeReturn.venus);
  const pMars = document.createElement("p");
  pMars.append(myAgeReturn.mars);
  const pJup = document.createElement("p");
  pJup.append(myAgeReturn.jupiter);
  document.querySelector("#response").append("Mercury age:");
  document.querySelector("#response").append(pMerc);
  document.querySelector("#response").append("Venus age:");
  document.querySelector("#response").append(pVen);
  document.querySelector("#response").append("Mars age:");
  document.querySelector("#response").append(pMars);
  document.querySelector("#response").append("Jupiter age:");
  document.querySelector("#response").append(pJup);
}

function calculatePast(event) {
  event.preventDefault();
  const currentAge = parseInt(document.querySelector("#currentAge").value);
  const yearsInPast = new Calculator(currentAge);
  const yearsAgo = parseInt(document.querySelector("#pastAge").value);
   document.querySelector("#response2").innerText = null;
  document.querySelector("#response2").append(yearsInPast.yearsPassed(yearsAgo));
}

function calculateFuture(event) {
  event.preventDefault();
  const currentAge2 = parseInt(document.querySelector("#currentAge2").value);
  const yearsInFuture = new Calculator(currentAge2);
  const yearsFromNow = parseInt(document.querySelector("#futureAge").value);
  document.querySelector("#response3").innerText = null;
  document.querySelector("#response3").append(yearsInFuture.yearsAhead(yearsFromNow));
}

function calculateDistance(event) {
  event.preventDefault();
  const yearSpan = parseInt(document.querySelector("#current-year").value);
  const distanceCalc = new Calculator(yearSpan)
}
// const yearsInFuture = parseInt(document.querySelector("#yearsInFuture").value);
  // myAgeReturn.yearsAhead(yearsInFuture);



// function handleRectangleForm() {
//   event.preventDefault();
//   document.querySelector('#response2').innerText = null;
//   const length1 = parseInt(document.querySelector('#rect-length1').value);
//   const length2 = parseInt(document.querySelector('#rect-length2').value);
//   const rectangle = new Rectangle(length1, length2);
//   const response = rectangle.getArea();
//   const pTag = document.createElement("p");
//   pTag.append(`The area of the rectangle is ${response}.`);
//   document.querySelector('#response2').append(pTag);
// }


window.addEventListener("load", function() {
  document.querySelector("#calculator-form").addEventListener("submit", calculateAge);
  this.document.querySelector("#calculate-past-form").addEventListener("submit", calculatePast);
  this.document.querySelector("#calculate-future-form").addEventListener("submit", calculateFuture);
  this.document.querySelector("#calculate-planet-travel").addEventListener("submit", calculateDistance);
});
