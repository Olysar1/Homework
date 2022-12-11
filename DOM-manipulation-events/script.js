//HOMEWORK:

//Task1:
const button = document.querySelector("#hider");
const text = document.querySelector("#text");

button.addEventListener("click", function () {
  console.log("btn clicked \n text hidden");
  text.style.visibility = "hidden";
});
