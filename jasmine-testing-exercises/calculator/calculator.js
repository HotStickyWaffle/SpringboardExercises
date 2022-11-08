let amount = document.querySelector('#loan-amount');
let years = document.querySelector('#loan-years');
let rate = document.querySelector('#loan-rate');
let monthlyPayment = document.querySelector('#monthly-payment');
let submit = document.querySelector('#calc-submit');

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  amount.value = 100000;
  years.value = 10;
  rate.value = 10;

  let monthlyPaymentAmount = calculateMonthlyPayment(getCurrentUIValues());

  updateMonthly(monthlyPaymentAmount);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let paymentCalc = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(paymentCalc)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values.amount;
  let n = values.years * 12;
  let i = values.rate / 12;
  console.log(n);
  console.log(P);
  console.log(i);
  let monthlyRate = ((P * i) / (1 - ((1 + i) ** -n)));
  let monthlyRateRound = (Math.round(monthlyRate * 100) / 100).toFixed(2);
  return monthlyRateRound.toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  monthlyPayment.innerText = (Math.round(monthly * 100) / 100).toFixed(2);
}
