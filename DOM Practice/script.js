// const parentDiv = document.querySelector("div");

// const allPs = parentDiv.querySelectorAll("p");

// console.log(allPs);
// for (let i = 0; i < allPs.length; i += 2) {
//   allPs[i].style.color = "red";
// }

//////////

// const links = Array.from(document.querySelectorAll("a"));

// for (let link of links) {
//   const href = link.getAttribute("href");
//   if (!href) continue;
//   if (href.startsWith("http://mysite.com")) continue;
//   if (!href.includes("://")) continue;

//   link.style.color = "red";
// }

// const hasHref = (el) => el.hasAttribute("href");
// const hasProtocol = (el) => el.getAttribute("href").includes("://");
// const isInternal = (el) => {
//   el.getAttribute("href").startsWith("http://mysite.com");
// };
// const changeColor = (el) => (el.style.color = "red");

// const goodLinks = links
//   .filter(hasHref)
//   .filter(hasProtocol)
//   .filter((el) => !isInternal(el))
//   .forEach(changeColor);

// console.log(goodLinks);

///////////
// function userCard() {
//   const cardDiv = document.createElement("div");
//   cardDiv.classList.add("card");

//   const image = document.createElement("img");
//   image.src =
//     "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg";
//   image.classList.add("rounded-img");

//   const name = document.createElement("h2");
//   name.innerHTML = "George Barbakadze";

//   const ul = document.createElement("ul");
//   ["React", "JavaScript", "NodeJS"]
//     .map((lang) => {
//       const li = document.createElement("li");
//       li.innerHTML = lang;
//       return li;
//     })
//     .forEach((li) => ul.appendChild(li));

//   const followBtn = document.createElement("button");
//   followBtn.innerHTML = "Follow";
//   followBtn.setAttribute("class", "btn");

//   cardDiv.appendChild(image);
//   cardDiv.appendChild(name);
//   cardDiv.appendChild(ul);
//   cardDiv.appendChild(followBtn);

//   document.body.appendChild(cardDiv);

//   return cardDiv;
// }

// document.body.appendChild(userCard());

///////////
// const randomNum = Math.floor(Math.random() * 20 + 1);

// const input = document.getElementById("number");
// const guess = document.querySelector("button");

// guess.addEventListener("click", () => {
//   if (input.value == randomNum) {
//     console.log("You Win!");
//   } else if (input.value == "") {
//     console.log("no number entered... enter a number between 1 and 20");
//   } else {
//     input.value < randomNum ? console.log("too low") : console.log("too high");
//   }
// });
