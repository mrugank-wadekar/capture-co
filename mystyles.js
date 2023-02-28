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
