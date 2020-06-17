const btn_cancelCity = document.querySelector(".cancel_city");
const button_changeCity = document.querySelector(".change_city");

btn_cancelCity.addEventListener("click", function () {
  //   console.log("this button is working");
  const paragraph3 = document.querySelector(".para_three");
  if (paragraph3.innerHTML != "") {
    paragraph3.innerHTML = "";
    paragraph3.style.padding = "1px";
  } else if (paragraph3.innerHTML === "") {
    alert("you already cancelled the actual city");
    paragraph3.style.padding = "1px";
  }
});

button_changeCity.addEventListener("click", function () {
  // console.log("is working");
  let para_three = document.querySelector(".para_three");
  let input = document.querySelector("#input_paraThree").value;
  if (input === "") {
    alert("Please fill out the field, cannot be empty");
    para_three.style.padding = "1px";
  } else if (input !== "") {
    para_three.innerHTML = input;
    para_three.style.opacity = "1";
  }
});
