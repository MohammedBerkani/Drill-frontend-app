// menu Btn In Mobile/Tablet Mode
console.log("dsq")
let menuBtn = document.querySelector(".menu");

let navBarWindow = document.querySelector("header .links");
menuBtn.onclick = function () {
  this.classList.toggle("active");
};

document.onclick = (e) => {
  e.stopPropagation();
  if (
    !e.target.classList.contains("links") &&
    !e.target.parentElement.classList.contains("menu")
  ) {
    menuBtn.classList.remove("active");
  }
};

// Add Year Auto
let dateElement = document.querySelector(".date");
let date = new Date().getFullYear();
dateElement.innerHTML = date;

// Add Background To Header When Scrolling
let header = document.querySelector("header");
window.onscroll = function () {
  this.scrollY >= 50
    ? header.classList.add("add-background")
    : header.classList.remove("add-background");
};

// Change Language
let language = document.querySelector(".language");
language.onclick = () => {
  localStorage.setItem("language", language.innerHTML);
};
