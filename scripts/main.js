
const myHeading = document.querySelector("h1");
myHeading.textContent = "I'm Melina Yang!";


const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.jpeg") {
    myImage.setAttribute("src", "images/cat2.jpeg");
  } else {
    myImage.setAttribute("src", "images/cat.jpeg");
  }
};


let myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome, ${myName}!`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hellooo, ${storedName}!`;
}

myButton.onclick = () => {
  setUserName();
};
