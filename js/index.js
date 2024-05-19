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

//Форма заполнение номера телефона
function formatPhoneNumber(input) {
  // Удаление всех нецифровых символов из строки
  let cleaned = input.value.replace(/\D/g, "");
  // Проверка, что введено минимум 10 цифр
  if (cleaned.length >= 10) {
    // Форматирование номера
    let formatted = "";
    // Добавление кода страны
    if (cleaned.length > 10) {
      formatted = "+" + cleaned.substring(0, cleaned.length - 10) + " ";
      cleaned = cleaned.substring(cleaned.length - 10);
    }
    // Добавление кода города
    formatted += "(" + cleaned.substring(0, 3) + ") ";
    cleaned = cleaned.substring(3);
    // Добавление первой части номера
    formatted += cleaned.substring(0, 3) + "-";
    cleaned = cleaned.substring(3);
    // Добавление второй части номера
    formatted += cleaned.substring(0, 2) + "-";
    cleaned = cleaned.substring(2);
    // Добавление последней части номера
    formatted += cleaned.substring(0, 2);
    // Обновление значения в поле ввода
    input.value = formatted;
  }
}
