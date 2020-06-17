const button_changeJobPosition = document.querySelector(".change_job");

function cancelJobPosition() {
  let btn_cancelJobPosition = document.querySelector(".cancel_jobPosition");
  btn_cancelJobPosition.addEventListener("click", function () {
    // console.log("this button is working");
    let para_two = document.querySelector(".para_two");
    if (para_two.innerHTML !== "") {
      para_two.style.padding = "1px";
      para_two.innerHTML = "";
    } else if (para_two.innerHTML === "") {
      alert("you already cancelled the job position");
    }
  });
}
cancelJobPosition();

button_changeJobPosition.addEventListener("click", function () {
  let para_two = document.querySelector(".para_two");
  let paragraph2 = para_two.innerHTML;
  let input = document.querySelector("#input_paraTwo").value;
  para_two.innerHTML = input;
  if (input === "") {
    alert("Please fill out the field, cannot be empty");
    para_two.innerHTML = paragraph2;
  } else {
    para_two.innerHTML = input;
    para_two.style.opacity = "1";
  }
});
