import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Calculator from './js/planet-age.js';

function calculateAge(event) {
  event.preventDefault();
  const myAge = parseInt(document.querySelector("#myAge").value);
  const myAgeReturn = new Calculator(myAge);
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
  const yearsInPast = new Calculator(currentAge)
  const yearsAgo = parseInt(document.querySelector("#pastAge").value);
  yearsInPast.yearsPassed(yearsAgo);
  
  document.querySelector("#past-response").innerText = null;
  
}

// const yearsInFuture = parseInt(document.querySelector("#yearsInFuture").value);
  // myAgeReturn.yearsAhead(yearsInFuture);


// function handleTriangleForm() {
//   event.preventDefault();
//   document.querySelector('#response').innerText = null;
//   const length2 = parseInt(document.querySelector('#length2').value);
//   const length1 = parseInt(document.querySelector('#length1').value);
//   const length3 = parseInt(document.querySelector('#length3').value);
//   const triangle = new Triangle(length1, length2, length3);
//   const response = triangle.checkType();
//   const pTag = document.createElement("p");
//   pTag.append(response);
//   document.querySelector('#response').append(pTag);
// }


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
});
// window.addEventListener("load", function() {
//   document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
//   document.querySelector("#rectangle-area-form").addEventListener("submit", handleRectangleForm);
// });