const slides = document.querySelectorAll(".card");
let isDragging = false;
function touchMove() {
  isDragging = true;
}

function touchEnd() {
  if (isDragging) {
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].dataset.index == 0) {
        slides[i].dataset.index = 2;
      } else if (slides[i].dataset.index == 1) {
        slides[i].dataset.index = 0;
      } else if (slides[i].dataset.index == 2) {
        slides[i].dataset.index = 1;
      }
    }
  }
  isDragging = false;
}

slides.forEach((slide) => {
  slide.addEventListener("touchmove", touchMove);
  slide.addEventListener("touchend", touchEnd);
});
