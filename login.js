const form = document.getElementsByTagName("form");
const input_name = document.querySelector("#name");
const input_email = document.querySelector("#email");
const submit_button = document.querySelector(".submit_btn");

submit_button.addEventListener("click", function () {
  if (input_name.value === "") {
    input_name.style.border = "2px solid red";
  } else {
    input_name.style.border = "1px solid gray";
  }
  if (input_email.value === "") {
    input_email.style.border = "2px solid red";
  } else {
    input_email.style.border = "1px solid gray";
  }
});

input_name.addEventListener("change", changeText);
function changeText() {
  const input = document.querySelector("#name");
  input.value = input.value.toUpperCase();
}

input_name.addEventListener("focus", addFocusInput);
function addFocusInput() {
  let input;
  input = document.querySelector("#name");
  input.style.background = "#E7F3F8";
}

input_name.addEventListener("blur", blurInputName);
function blurInputName() {
  let input;
  input = document.querySelector("#name");
  input.style.background = "white";
  input.style.border = "1px solid gray";
}

input_email.addEventListener("focus", addFocusInputEmail);
function addFocusInputEmail() {
  let email;
  email = document.querySelector("#email");
  email.style.background = "#E7F3F8";
}

input_email.addEventListener("blur", blurInputEmail);
function blurInputEmail() {
  let email;
  email = document.querySelector("#email");
  email.style.background = "white";
  email.style.border = "1px solid gray";
}
