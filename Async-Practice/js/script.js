// async function f() {
//   const promise = new Promise((resolve, reject) =>
//     setTimeout(() => resolve("mushaobs"), 3000)
//   );
//   const result = await promise;
//   alert(result);
// }

// f();

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// console.log(loadJson("https://api.github.com/users/Olysar1").catch(alert));

// async function loadJson1(url) {
//   try {
//     const link = await fetch(url);
//     if (link.status == 200) return link.json();
//   } catch (err) {
//     alert(err);
//   }
// }

// console.log(loadJson1("https://api.github.com/users/Olysar1"));

//////////////////LECTURE//////////////////
////
// function repeat(str, n, cb) {
//   let result = str;
//   for (let i = 0; i < n; i++) {
//     result = cb(result);
//   }
//   console.log(result);
// }

// repeat("test string", 5, (t) => `!${t}!`);

// //recursion
// function repeatRecursion(str, n, cb) {
//   if (n == 0) return str;

//   return repeatRecursion(cb(str), n - 1, cb);
// }

// const x = repeatRecursion("test string", 7, (t) => `!${t}!`);
// console.log(x);

// ////
// function task(data) {
//   return new Promise((resolve, reject) => {
//     if (typeof data !== "number") reject("error");
//     data % 2 == 1
//       ? setTimeout(() => resolve("odd"), 1000)
//       : setTimeout(() => resolve("even"), 2000);
//   });
// }

// // console.log(task(1).then(alert).catch(alert));

// ////
// const linkJson = "https://jsonplaceholder.typicode.com/users";

// async function fn(url) {
//   try {
//     const fetched = await fetch(url);
//     if (fetched.status === 404) throw new Error("NOT FOUND");
//     const result = await fetched.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// fn(linkJson).then((list) => console.log(list));

// ////
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((usersList) => console.log(usersList));

// ////
// function userCard(person) {
//   const cardDiv = document.createElement("div");
//   cardDiv.classList.add("card");

//   const image = document.createElement("img");
//   image.src =
//     "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg";
//   image.classList.add("rounded-img");

//   const name = document.createElement("h2");
//   name.innerHTML = person.name;

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

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (response.status === 404) throw new Error("NOT FOUND");

//     const usersList = await response.json();
//     usersList.forEach((user) => {
//       const userCard = this.userCard(user);
//       document.body.appendChild(userCard);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUsers();

//HOMEWORK

//task1:
function pipe(...n) {
  console.log(n);
  return (async function () {
    for (const fn of n) {
      await fn();
    }
  })();
}

// pipe(
//   () => setTimeout(() => console.log("first"), 3000),
//   () => setTimeout(() => console.log("second"), 2000),
//   () => setTimeout(() => console.log("third"), 1000)
// );

//task2:
const makePost = (userName, postTitle, postBody) => {
  const post = document.createElement("div");
  post.classList.add("post");

  const name = document.createElement("h2");
  name.innerHTML = userName;

  const bodyDiv = document.createElement("div");
  const title = document.createElement("h3");
  title.innerHTML = postTitle;

  const body = document.createElement("p");
  body.innerHTML = postBody;

  post.appendChild(name);
  post.appendChild(bodyDiv);
  bodyDiv.appendChild(title);
  bodyDiv.appendChild(body);

  document.body.appendChild(post);
};

async function displayPosts() {
  try {
    const userApi = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then(async (response) => await response.json());

    const postApi = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then(async (response) => await response.json());

    postApi.map((post) => {
      const author = userApi.find((user) => user.id === post.userId).name;
      console.log(author);
      makePost(author, post.title, post.body);
    });
  } catch (err) {
    console.log(err);
  }
}

// displayPosts();

//task3:
const makeDeepClone = function (userArr) {
  if (typeof userArr !== "object") {
    return userArr;
  }
  let userDeepClone = Array.isArray(userArr) ? [] : {};
  for (let key in userArr) {
    const val = userArr[key];
    userDeepClone[key] = makeDeepClone(val);
  }

  return userDeepClone;
};

////

function clone(arr) {}
