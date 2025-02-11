let counter = 1;
const totalSlides = 4;
const intervalTime = 3000; // Tempo entre os slides (5 segundos)

function changeSlide() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slide.style.transition = "opacity 1s ease-in-out";
    slide.style.opacity = "0";
  });

  document.getElementById(`btn${counter}`).checked = true;
  slides[counter - 1].style.opacity = "1";

  counter++;
  if (counter > totalSlides) {
    counter = 1;
  }
}

setInterval(changeSlide, intervalTime);
