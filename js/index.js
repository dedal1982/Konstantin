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
function formatDate() {
  var input = document.getElementById("birthday");
  var value = input.value
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
  input.value = !value[2]
    ? value[1]
    : value[1] + "." + value[2] + "." + value[3].slice(0, 4);
}
