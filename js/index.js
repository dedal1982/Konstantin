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

//Выбор стажа работы
const selectBtn = document.querySelector(".select-btn");
const selectBtnImg = document.querySelector(".select-btn-img");
const selectList = document.querySelector(".select-list");

selectBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  selectBtnImg.classList.toggle("active");
  selectBtn.classList.toggle("active");
  selectList.classList.toggle("active");
});

//Перебор стажа и выбор значения
const selectListItem = document.querySelectorAll(".select-list li");
const selectBtnText = document.querySelector(".select-btn-text");

selectListItem.forEach((elem) => {
  elem.addEventListener("click", () => {
    let elemText = elem.textContent;
    selectBtnText.textContent = elemText;
    selectList.classList.remove("active");
    selectBtn.classList.remove("active");
    selectBtnImg.classList.remove("active");
    selectBtnText.classList.add("active");
  });
});

//Чекбокс
const checkBox = document.querySelector(".check");
const checkBoxImg = document.querySelector(".check-image");
const agreementBtn = document.querySelector(".agreement-btn");

checkBox.addEventListener("click", () => {
  checkBoxImg.classList.toggle("active");
  agreementBtn.classList.toggle("active");
});

//Открытие дива для загружаемых документов

const docButton = document.querySelector(".doc-button");
const inputImagesBox = document.querySelector(".input-images-box");

docButton.addEventListener("click", () => {
  inputImagesBox.classList.toggle("active");
});
