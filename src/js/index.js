let counter = 1;
const totalSlides = 4;
const intervalTime = 3000; // Tempo entre os slides (5 segundos)
const slider = document.querySelector(".slider");
const homeSection = document.querySelector("section.home");

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

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search input");
    const cards = document.querySelectorAll(".cards-container .card");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        slider.style.display = "none";

        homeSection.style.minHeight = 0;

        cards.forEach((card) => {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(searchTerm) && title !== "") {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        setInterval(() => {
          
            if (searchInput.value === "") {
                slider.style.display = "block";
                homeSection.style.minHeight = 100 + "vh";
            }
        }, 500);
    });
});
