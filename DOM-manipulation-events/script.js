//HOMEWORK:

//Task1:
const button = document.querySelector("#hider");
const text = document.querySelector("#text");

button.addEventListener("click", () => {
  console.log("btn clicked \n text hidden");
  text.style.visibility = "hidden";
});

//Task2:
const insertedTag = document.createElement("div");
insertedTag.id = "card";
insertedTag.innerHTML = "<h2>George</h2> <a href='#'>Go to Profile</a>";

text.insertAdjacentElement("afterend", insertedTag);

//Task3:
const newDiv = document.querySelector("#card");
newDiv.style.backgroundColor = "red";
console.log(newDiv);
