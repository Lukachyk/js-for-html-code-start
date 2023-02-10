const block = document.querySelectorAll("[data-name='accordeon-title']");

block.forEach(function (item) {
  item.addEventListener("click", showContent);
});

////////////////
function showContent() {
  this.nextElementSibling.classList.toggle("hidden");
}
