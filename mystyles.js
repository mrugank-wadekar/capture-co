
// border rotoate effect for all the images
const images = document.querySelectorAll('.prod-image img');

images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    const rotateDiv = image.previousElementSibling;
    if (rotateDiv.classList.contains('rotate')) {
      rotateDiv.style.opacity = '1';
    }
  });

  image.addEventListener('mouseout', () => {
    const rotateDiv = image.previousElementSibling;
    if (rotateDiv.classList.contains('rotate')) {
      rotateDiv.style.opacity = '0';
    }
  });
});



//logo card effect on home

const logo = document.querySelector('.logo');
const fixedInner1 = document.querySelector('.fixed-inner-1');
const leftDiv =document.querySelector('.left');
const rightDiv =document.querySelector('.right');

logo.addEventListener('mouseover', () => {
  fixedInner1.style.width = '80%';
  fixedInner1.style.height = '64%';
  fixedInner1.style.borderRadius ='14px';
  leftDiv.style.opacity='1';
  rightDiv.style.opacity='1';
  logo.style.opacity='0';
});

// logo.addEventListener('mouseout', () => {
//   fixedInner1.style.width = '25%';
//   fixedInner1.style.height = '44%';
//   fixedInner1.style.borderRadius ='50%';
//   leftDiv.style.opacity='0';
//   rightDiv.style.opacity='0';
//   logo.style.opacity='1';
// });
