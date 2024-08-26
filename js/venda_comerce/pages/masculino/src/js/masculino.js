const dragonBallBtn = document.querySelector(
  ".products-card-dragonball__button"
);
const buyModal = document.querySelector(".buy-modal");
const buyModalClose = document.querySelector(".buy-modal-close__btn");
const buyNowBtn = document.querySelector(".buy-modal__btn");
const copyRightSpan = document.querySelector(".date");
const sunGlassBtn = document.querySelector(".products-card__sunglass");
const suitBtn = document.querySelector(".products-card__suit");
const outModalContainer = document.querySelector(".out-modal-container");
const closeModalBtn = document.querySelector(".out-modal__close");

function handleModalClick(event) {
  //?add / remove the classlist 'show' then add display block / none on css.
  event.preventDefault();
  buyModal.classList.toggle("show");
}

function handleOutModalMan(event) {
  event.preventDefault();
  outModalContainer.classList.toggle("show");
}

function alertMsg() {
  //?return the alert with a 'thank you' message.
  return window.alert("MUITO OBRIGADO POR TESTAR O MEU SITE!!");
}

function copyRight() {
  //?copyRight - return the year and fill it on footer innerHTML.
  return (copyRightSpan.innerHTML = new Date().getFullYear() + ".");
}

copyRight();
dragonBallBtn.addEventListener("click", handleModalClick);
buyModalClose.addEventListener("click", handleModalClick);
sunGlassBtn.addEventListener("click", handleOutModalMan);
suitBtn.addEventListener("click", handleOutModalMan);
buyNowBtn.addEventListener("click", alertMsg);
closeModalBtn.addEventListener("click", handleOutModalMan);
