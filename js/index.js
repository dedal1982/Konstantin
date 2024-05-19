const imageClick = document.querySelectorAll(".slide-item img");
const page = document.querySelector(".page");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup-content img");
const popupClosed = document.querySelector(".popup-closed");

imageClick.forEach((img) => {
  img.addEventListener("click", () => {
    popupImg.src = img.src;
    popup.classList.add("popup-open");
    page.classList.add("lock");
  });
});

popupClosed.addEventListener("click", () => {
  popup.classList.remove("popup-open");
  page.classList.remove("lock");
});

//Форма заполнение даты рождения
