const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submit_button = document.querySelector(".submit_button");

submit_button.addEventListener("click", function () {
  if (name.value == "") {
    name.style.border = "1px solid red";
  } else {
    name.style.border = "1px solid gray";
  }
  if (surname.value == "") {
    surname.style.border = "1px solid red";
  } else {
    surname.style.border = "1px solid gray";
  }
  if (email.value == "") {
    email.style.border = "1px solid red";
  } else if (email.value != "") {
    email.style.border = "1px solid gray";
  }
});

submit_button.addEventListener("click", function () {
  if (name.value && surname.value && email.value && message.value != "") {
    alert("Thank you for the message");
  }
});

const clearInputs_button = document.querySelector(".clear_inputs");
clearInputs_button.addEventListener("click", function () {
  if (name.value != "") {
    name.value = "";
  }
  if (surname.value != "") {
    surname.value = "";
  }
  if (email.value != "") {
    email.value = "";
  }
  if (message.value != "") {
    message.value = "";
  }
});
