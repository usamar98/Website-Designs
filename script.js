const container = document.querySelector('.container');
const products = document.querySelector('.products');
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');
const productWidth = document.querySelector('.product').offsetWidth;
const productsCount = document.querySelectorAll('.product').length;

let scrollPosition = 0;

btnLeft.addEventListener('click', () => {
  scrollPosition -= productWidth * 3;
  scrollPosition = Math.max(scrollPosition, 0);
  products.style.transform = `translateX(-${scrollPosition}px)`;
});

btnRight.addEventListener('click', () => {
  scrollPosition += productWidth * 2;
  const maxScroll = productWidth * (productsCount - 5);
  scrollPosition = Math.min(scrollPosition, maxScroll);
  products.style.transform = `translateX(-${scrollPosition}px)`;
});