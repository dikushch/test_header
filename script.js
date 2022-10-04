let brg = document.querySelector('.top-menu__brg');
let topMenu = document.querySelector('.top-menu__list');
let links = document.querySelectorAll('.top-menu__link');

brg.addEventListener('click', function () {
  brg.classList.toggle('open');
  topMenu.classList.toggle('open');
});

for (let link of links) {
  link.addEventListener('click', function () {
    brg.classList.remove('open');
    topMenu.classList.remove('open');
  });
}