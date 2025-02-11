const USER = "admin";
const PASS = "1234";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (username === USER && password === PASS) {
        Swal.fire({
            title: 'Sucesso!',
            text: 'Você fez login com sucesso.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        window.location.href = "/index.html";
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorretos.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        document.getElementById("message").textContent = "Usuário ou senha incorretos!";
    }
});
