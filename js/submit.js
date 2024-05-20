document.getElementById("doc-button").addEventListener("click", function (e) {
  e.preventDefault(); // Предотвращаем стандартное поведение формы

  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*"; // Принимаем только изображения
  input.multiple = true; // Разрешаем выбор нескольких файлов

  input.addEventListener("change", function (event) {
    const files = event.target.files;
    const container = document.querySelector(".input-images-wrap");

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const imgWrap = document.createElement("div");
          imgWrap.className = "input-image";
          const img = document.createElement("img");
          img.src = e.target.result;
          img.className = "doc-img";
          img.alt = "документ";
          const imgBefo = document.createElement("img");
          imgBefo.className = "image-before"; // Добавляем класс
          imgWrap.appendChild(imgBefo);
          imgWrap.appendChild(img);
          container.appendChild(imgWrap);

          // Обработчик события click для элементов с классом image-before
          imgBefo.addEventListener("click", function (e) {
            e.stopPropagation();
            imgWrap.remove();
            e.preventDefault();
          });
        };
        reader.readAsDataURL(file);
      }
    }
  });

  input.click();
});
