const modalButtons = document.querySelectorAll("[data-modal-button]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
const allMovals = document.querySelectorAll("[data-modal]");

// Кнопки открыть модалку
modalButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modalId = this.dataset.modalButton;

    const modal = document.querySelector("#" + modalId);
    modal.classList.remove("hidden");

    // находим внутри открываемый модалки блок modal-window и запрещаем ему передавать клики родителм наверх
    modal
      .querySelector(".modal-window")
      .addEventListener("click", function (event) {
        event.stopPropagation();
      });
  });
});

// Кнопки закрыть модалку
modalCloseButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modal = this.closest("[data-modal]"); // ищем ближайшего Родителся вверх по блоку
    modal.classList.add("hidden");
  });
});

// Закрытие модалок по фейду
allMovals.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add("hidden");
  });
});
