// Slider automático
let counter = 1;
const totalSlides = 4;
const intervalTime = 3000;
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

// Elementos e Eventos dos Modals
document.addEventListener('DOMContentLoaded', function() {
    // Modals Tela
    const modal = document.querySelectorAll('#modalHour');
    const openModal = document.querySelectorAll('#openModal');
    const closeModal = document.querySelectorAll('#closeModal');
    const modalTicket = document.querySelectorAll('#modalTicket');
    const closeModalTicket = document.querySelectorAll('#closeModalTicket');
    const continueButtonEl = document.querySelectorAll('#continueButton')

    console.log(continueButtonEl)

    closeModal.forEach((btn, index) => {
        btn.addEventListener('click', () =>{
            modal[index].style.display = 'none';
        });
    });
    
    openModal.forEach((btn, index) => {
        btn.addEventListener('click', () =>{
            modal[index].style.display = 'flex';
        });
    });
    
    continueButtonEl.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            modal[index].style.display = 'none';
            modalTicket[index].style.display = 'flex';
        });
    });

    closeModalTicket.forEach((btn, index) => {
        btn.addEventListener('click', () =>{
            modalTicket[index].style.display = 'none';
        });
    });

     // Seleciona os elementos do DOM
     const quantityInput = document.querySelectorAll('.quantity');
     const decreaseButton = document.querySelectorAll('.decrease');
     const increaseButton = document.querySelectorAll('.increase');

     console.log(quantityInput)
     console.log(decreaseButton)
     console.log(increaseButton)

     decreaseButton.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput[index].value);
            if (currentValue > 1) {
                quantityInput[index].value = currentValue - 1;
                console.log(quantityInput[index].value)
            }
        });
     });

     increaseButton.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput[index].value);
            if (currentValue < 10) {
                quantityInput[index].value = currentValue + 1;
                console.log(quantityInput[index].value)
            }
        });
     });

     quantityInput.forEach((btn, index) => {
        btn.addEventListener('input', () => {
            let value = parseInt(quantityInput[index].value);
            if (value < 1) quantityInput[index].value = 1;
            if (value > 10) quantityInput[index].value = 10;
            console.log(quantityInput[index].value)
        });
     });
});

// Presquisa
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

