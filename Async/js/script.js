//HOMEWORK:

//task1:

//promise
const mySetTimeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

mySetTimeout(4000).then(() => alert(`Promise here`));

// // async
const mySetTimeoutAsync = async (ms) => {
  let temp = new Promise((resolve) => {
    setTimeout(() => resolve("finished async"), ms);
  });
  return await temp;
};

// mySetTimeoutAsync(6000).then(() => alert("Async here"));

//task2:

// promise
const getFacebookProfile = (a) => {
  return new Promise((res, rej) => {
    typeof a !== "number" ? rej("error") : res(a * 2);
  });
};

getFacebookProfile(1)
  .then((profile) => getFacebookProfile(profile.friends[0].id))
  .then((friendProfile) => getFacebookProfile(friendProfile.friend[0].id))
  .then((friendsFriend) => getFacebookProfile(friendsFriend.friend[0].id))
  .then((finalProfile) => console.log(`done: ${finalProfile.friends[0].id}`))
  .catch((err) => {
    alert(err);
  });

//async
const getFacebookProfile1 = async () => {
  try {
    const profile = await getFacebookProfile(1);
    const friendProfile = await getFacebookProfile(profile);
    const friendsFriend = await getFacebookProfile(friendProfile);
    const finalProfile = await getFacebookProfile(friendsFriend);
    console.log(`done: ${finalProfile.friends[0].id}`);
  } catch (err) {
    alert(err);
  }
};

getFacebookProfile1();
