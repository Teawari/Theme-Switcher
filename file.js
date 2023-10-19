const greyButton = document.getElementById("grey");
const whiteButton = document.getElementById("white");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");
// const body = document.body;


// greyButton.addEventListener("click", () => {
//     body.style.backgroundColor = "grey";
// });

// whiteButton.addEventListener("click", () => {
//     body.style.backgroundColor = "white";
// });

// blueButton.addEventListener("click", () => {
//     body.style.backgroundColor = "blue";
// });

// yellowButton.addEventListener("click", () => {
//     body.style.backgroundColor = "yellow";
// });

const buttonIds = ["grey", "white", "blue", "yellow"];
const body = document.body;

buttonIds.forEach((id) => {
  const button = document.getElementById(id);
  button.addEventListener("click", () => {
    body.style.backgroundColor = id;
  });
});