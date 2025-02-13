// Slider automático
let counter = 1;
const totalSlides = 4;
const intervalTime = 3000;
const slider = document.querySelector(".slider");
const homeSection = document.querySelector("section.home");
const iconLogin = document.getElementById("iconLogin")

iconLogin.addEventListener("click", () => {
    if (localStorage.getItem("isLogged") === "true") {
        localStorage.setItem("isLogged", false)
        Swal.fire({
            title: "Sair!",
            text: "Você saiu",
            icon: "success",
            confirmButtonText: "OK",
        });
    } else {
        Swal.fire({
            title: "Sair!",
            text: "Para sair você precisa estar logado!",
            icon: "error",
            confirmButtonText: "OK",
        });
    }
})

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
document.addEventListener('DOMContentLoaded', function () {
    // Modals Tela
    const modal = document.querySelectorAll('#modalHour');
    const openModal = document.querySelectorAll('#openModal');
    const closeModal = document.querySelectorAll('#closeModal');
    const modalTicket = document.querySelectorAll('#modalTicket');
    const closeModalTicket = document.querySelectorAll('#closeModalTicket');
    const continueButtonEl = document.querySelectorAll('#continueButton')
    const radioOptionEl = document.querySelectorAll('#radioOption');

    radioOptionEl.forEach((radio) => {
        console.log(radio.checked)
    })

    closeModal.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            modal[index].style.display = 'none';
        });
    });

    openModal.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (localStorage.getItem("isLogged") === "true") {
                modal[index].style.display = 'flex';
            } else {
                Swal.fire({
                    title: "Faça Login!",
                    text: "É necessário fazer login para efetuar a compra de um ingresso!",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        });
    });

    continueButtonEl.forEach((btn, index) => {
        btn.addEventListener('click', () => {

            const selectedRadio = Array.from(radioOptionEl).some(radio => radio.checked)

            if (selectedRadio) {
                modal[index].style.display = 'none';
                modalTicket[index].style.display = 'flex';
                radioOptionEl.forEach((radio) => {
                    radio.checked = false;
                })
            } else {
                Swal.fire({
                    title: "Erro!",
                    text: "É necessário selecionar uma sessão",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        });
    });


    closeModalTicket.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            modalTicket[index].style.display = 'none';
            totalTickets.forEach((tickets) => {
                tickets.innerHTML = 0;
            })
            totalValue.forEach((total) => {
                var nada = 0;
                total.innerHTML = nada.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
            })
            quantityInput.forEach((input) => {
                input.value = 0;
            })
        });
    });

    // Seleciona os elementos do DOM
    const quantityInput = document.querySelectorAll('.quantity');
    const decreaseButton = document.querySelectorAll('.decrease');
    const increaseButton = document.querySelectorAll('.increase');
    const ticketLabel = document.querySelectorAll('#ticketLabel');
    const totalTickets = document.querySelectorAll('#quantityTickets');
    const totalValue = document.querySelectorAll('#ticketValue');

    function attValues() {

        let totalIngressos = 0;
        let valorTotal = 0;

        ticketLabel.forEach((ticketLabel) => {
            const quantidade = parseInt(ticketLabel.querySelector(".quantity").value);
            const preco = parseFloat(ticketLabel.dataset.price);

            totalIngressos += quantidade;
            valorTotal += quantidade * preco;
        });

        totalTickets.forEach((tickets) => {
            tickets.innerHTML = totalIngressos;
        })
        totalValue.forEach((total) => {
            total.innerHTML = valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        })
    }

    decreaseButton.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput[index].value);
            if (currentValue > 0) {
                quantityInput[index].value = currentValue - 1;
                attValues();
            }
        });
    });

    increaseButton.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput[index].value);
            if (currentValue < 10) {
                quantityInput[index].value = currentValue + 1;
                attValues();
            }
        });
    });

    quantityInput.forEach((btn, index) => {
        btn.addEventListener('input', () => {
            let value = parseInt(quantityInput[index].value);
            if (value < 0) quantityInput[index].value = 1;
            if (value > 10) quantityInput[index].value = 10;
            attValues();
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

