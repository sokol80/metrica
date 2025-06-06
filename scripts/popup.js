const POPUP_OPENED_CLASSNAME = "popup_open";
const BODY_FIXED_CLASSNAME = "body_fixed";
const bodyNode = document.querySelector("body");

const popupNode = document.querySelector(".js-popup");

const btnOpenNode = document.querySelector(".js-btn");
btnOpenNode.addEventListener("click", togglePopup);

const btnCloseNode = document.querySelector(".js-popup__close-btn");
btnCloseNode.addEventListener("click", togglePopup);

function togglePopup() {
  popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}

const popupContentNode = document.querySelector(".js-popup__content");

popupNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(popupContentNode);

  if (isClickOutsideContent) {
    togglePopup();
  }
});
