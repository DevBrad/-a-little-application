const button_changeName = document.querySelector(".change_name");

button_changeName.addEventListener("click", function () {
  let para_one = document.querySelector(".para_one");
  let paragraph = para_one.innerHTML;
  let input = document.querySelector("#input_paraOne").value;
  if (input === "") {
    para_one.style.padding = "1px";
    para_one.innerHTML = paragraph;
    alert(" Please fill out the field , cannot be blank");
  } else if (input !== "") {
    para_one.innerHTML = input;
    para_one.style.padding = "0px";
    para_one.style.opacity = "1";
  }
});

function cancelName() {
  const cancelName_btn = document.querySelector(".cancel_name");
  const paragraph1 = document.querySelector(".para_one");
  cancelName_btn.addEventListener("click", function () {
    if (paragraph1.innerHTML !== "") {
      paragraph1.style.padding = "1px";
      paragraph1.innerHTML = "";
    } else {
      paragraph1.style.padding = "1px";
      alert("you already cancelled the name");
    }
  });
}
cancelName();
