const womanCategoryLink = document.querySelector(".category-card-woman h3 a");
const kidCategoryLink = document.querySelector(".category-card-kid h3 a");
const closeModalBtn = document.querySelector(".out-modal__close");
const outModalContainer = document.querySelector(".out-modal-container");
const copyRightSpan = document.querySelector(".date");

function handleModalClick(event) {
  event.preventDefault();
  outModalContainer.classList.toggle("show");
}

function copyRight() {
  return (copyRightSpan.innerHTML = new Date().getFullYear() + ".");
}

copyRight();
womanCategoryLink.addEventListener("click", handleModalClick);
kidCategoryLink.addEventListener("click", handleModalClick);
closeModalBtn.addEventListener("click", handleModalClick);
