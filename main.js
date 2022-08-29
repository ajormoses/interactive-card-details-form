var card_number = document.getElementById("card-no");
var month = document.getElementById("mm");
var exp_month = document.querySelector(".month");
var year = document.getElementById("yy");
var exp_year = document.querySelector(".year");
var cvc = document.getElementById("cvc");
var backCard_cvc = document.querySelector(".cvc-no");
var frontCard_number = document.getElementById("card-number");
var confirm = document.querySelector(".confirm");
var continue_modal = document.querySelector(".continue");
const form = document.querySelector("#form");
const user = document.querySelector(".username");
const user_input = document.getElementById("cardholder-name");
const modal = document.querySelector(".modal");

card_number.oninput = function () {
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength);
  }
};

month.oninput = function () {
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength);
  }
};

year.oninput = function () {
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength);
  }
};

cvc.oninput = function () {
  if (this.value.length > this.maxLength) {
    this.value = this.value.slice(0, this.maxLength);
  }
};

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

confirm.addEventListener("click", (e) => {
  e.preventDefault();

  // Cardholder Name validation
  if (user_input.value.trim() == "") {
    error_user(user_input, "Cardholder can't be empty");
  } else {
    success_user(user_input);
  }

  // Card Number validation
  if (card_number.value.trim() == "") {
    error_cardNumber(card_number, "Cardholder can't be empty");
  } else if (card_number.value.trim().length < 16) {
    error_cardNumber(card_number, "Max length is 16 characters");
  } else {
    success_cardNumber(card_number);
  }

  //   Exp Month validation
  if (month.value.trim() == "") {
    error_exp(month, "Can't be blank");
  } else {
    success_month(month);
  }

  //   Exp Year validation
  if (year.value.trim() == "") {
    error_exp(year, "Can't be blank");
  } else {
    success_year(year);
  }

  // CVC validation
  if (cvc.value.trim() == "") {
    error_cvc(cvc, "Can't be blank");
  } else {
    success_cvc(cvc);
  }

  if (
    user.textContent == user_input.value &&
    frontCard_number.textContent == format(card_number.value) &&
    exp_month.textContent == month.value &&
    exp_year.textContent == year.value &&
    backCard_cvc.textContent == cvc.value
  ) {
    form.style.display = "none";
    modal.style.display = "block";
  }
});

continue_modal.addEventListener("click", () => {
  location.reload();
});

function error_user(element, msg) {
  element.style.border = "2px solid hsl(0, 100%, 66%)";
  const parent = element.parentElement;
  const err = parent.querySelector(".card-holder-err");
  err.style.display = "block";
  err.innerHTML = msg;
}

function success_user(element) {
  element.style.border = "2px solid  hsl(249, 99%, 64%)";
  const parent = element.parentElement;
  const err = parent.querySelector(".card-holder-err");
  err.style.display = "none";
  user.textContent = user_input.value;
}

function error_cardNumber(element, msg) {
  element.style.border = "2px solid hsl(0, 100%, 66%)";
  const parent = element.parentElement;
  const err = parent.querySelector(".card-number-err");
  err.style.display = "block";
  err.innerHTML = msg;
}

function success_cardNumber(element) {
  element.style.border = "2px solid  hsl(249, 99%, 64%)";
  const parent = element.parentElement;
  const err = parent.querySelector(".card-number-err");
  err.style.display = "none";
  frontCard_number.textContent = format(card_number.value);
}

const err = document.querySelector(".exp-err");

function error_exp(element, msg) {
  element.style.border = "2px solid hsl(0, 100%, 66%)";
  err.style.display = "block";
  err.innerHTML = msg;
}

function success_month(element) {
  element.style.border = "2px solid hsl(249, 99%, 64%)";
  err.style.display = "none";
  exp_month.textContent = month.value;
}

function success_year(element) {
  element.style.border = "2px solid hsl(249, 99%, 64%)";
  err.style.display = "none";
  exp_year.textContent = year.value;
}

function error_cvc(element, msg) {
  element.style.border = "2px solid hsl(0, 100%, 66%)";
  const parent = element.parentElement;
  const err = parent.querySelector(".cvc-err");
  err.style.display = "block";
  err.innerHTML = msg;
}

function success_cvc(element) {
  element.style.border = "2px solid  hsl(249, 99%, 64%)";
  const parent = element.parentElement;
  const err = parent.querySelector(".cvc-err");
  err.style.display = "none";
  backCard_cvc.textContent = cvc.value;
}
