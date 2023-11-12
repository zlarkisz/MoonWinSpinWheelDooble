const popup = document.getElementById("popup");
const title = document.getElementById("popup-title");
const main = document.getElementById("main");

const popupAnimationClasses = [
  { name: "popup_show", element: popup },
  { name: "main_hide", element: main },
  { name: "title_show", element: title },
];

if (localStorage.getItem("showPopup")) {
  animatePopup();
}

const imageWheelButton = document.getElementById("imageWheelButton");
const wheelArrow = document.getElementById("wheelArrow");
const externalWheel = document.getElementById("externalWheel");
const insideWheel = document.getElementById("insideWheel");

const wheelAnimationClasses = [
  { name: "welcome-offer-section__wheel-arrow_rotate", element: wheelArrow },
  {
    name: "welcome-offer-section__wheel-external_rotate",
    element: externalWheel,
  },
  { name: "welcome-offer-section__wheel-inside_rotate", element: insideWheel },
];

function addAnimationClasses(animationArray) {
  animationArray.forEach(({ name, element }) => element.classList.add(name));
}

function handleSpinButtonClick() {
  localStorage.setItem("showPopup", true);

  imageWheelButton.style.animation = "none";

  addAnimationClasses(wheelAnimationClasses);
}

function animatePopup() {
  addAnimationClasses(popupAnimationClasses);
  addAnimationClasses(titleAnimationClasses);
}

imageWheelButton.addEventListener("click", handleSpinButtonClick);

insideWheel.addEventListener("animationend", animatePopup);
