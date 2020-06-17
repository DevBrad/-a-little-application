const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submit_button = document.querySelector(".submit_button");

function messageTooLong() {
  message.style.border = "2px solid red";
  message.value = "";
  alert(
    "Your message is too long, please write a message that has 50 words or less"
  );
}

function messageOk() {
  message.style.border = "1px solid gray";
}

submit_button.addEventListener("click", function () {
  if (name.value == "") {
    name.style.border = "1px solid red";
  } else {
    name.style.border = "1px solid gray";
    name.style.opacity = "0.5";
  }
  if (surname.value == "") {
    surname.style.border = "1px solid red";
  } else {
    surname.style.border = "1px solid gray";
    surname.style.opacity = "0.5";
  }
  if (email.value == "") {
    email.style.border = "1px solid red";
  } else if (email.value != "") {
    email.style.border = "1px solid gray";
    email.style.opacity = "0.5";
  }
  if (message.value.length > 50) {
    messageTooLong();
  } else if (message.value.length < 50) {
    messageOk();
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
  if (name.value == "") {
    name.style.border = "1px solid gray";
  }
  if (surname.value == "") {
    surname.style.border = "1px solid gray";
  }
  if (email.value == "") {
    email.style.border = "1px solid gray";
  }
});
