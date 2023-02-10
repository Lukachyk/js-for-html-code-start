// Находим нужные элементы: модалка кнопка , кнопка закрытия

const button = document.querySelector("[data-modal-button]");
const modal = document.querySelector("[data-modal]");
const buttonClose = document.querySelector("[data-modal-close]");

// прослушиваем на кнопке открытия , открываем
button.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

// Прослушиеваем на кнопке закрытия и закрываем
buttonClose.addEventListener("click", function () {
  modal.classList.add("hidden");
});
modal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

modal
  .querySelector(".modal-window")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });
