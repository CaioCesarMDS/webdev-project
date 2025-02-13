const USER = "admin";
const PASS = "1234";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (username === USER && password === PASS) {
        Swal.fire({
            title: "Sucesso!",
            text: "Você fez login com sucesso.",
            icon: "success",
            confirmButtonText: "OK",
        });

        const storedUsername = localStorage.getItem("userName");
        const storedPassword = localStorage.getItem("userPassword");

        if (username === storedUsername && password === storedPassword) {
            localStorage.setItem("isLogged", true)  
            
            setTimeout(() => {
                window.location.href = "/index.html";
            }, 3000);
        } else {
            Swal.fire({
                title: "Erro!",
                text: "Usuário ou senha incorretos.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }

        
    } else {
        Swal.fire({
            title: "Erro!",
            text: "Preencha todos os campos!.",
            icon: "error",
            confirmButtonText: "OK",
        });
        localStorage.setItem("isLogged", false)
    }
});
