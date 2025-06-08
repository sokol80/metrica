const POPUP_OPENED_CLASSNAME_ = "popup_open";
const BODY_FIXED_CLASSNAME_ = "body_fixed";

const bodyNode_ = document.querySelector("body");
const popupNode = document.querySelector(".js-popup");
const btnOpenNode = document.querySelector(".js-btn");
const popupContentNode = document.querySelector(".js-popup__content");
const btnCloseNode = document.querySelector(".js-popup__close-btn");

btnOpenNode.addEventListener("click", togglePopup);
btnCloseNode.addEventListener("click", togglePopup);

popupNode.addEventListener("click", (event) => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(popupContentNode);

  if (isClickOutsideContent) {
    togglePopup();
  }
});

function togglePopup() {
  popupNode.classList.toggle(POPUP_OPENED_CLASSNAME_);
  bodyNode_.classList.toggle(BODY_FIXED_CLASSNAME_);
}
