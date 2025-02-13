document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("userPassword");

    if (username === storedUsername && password === storedPassword) {
      Swal.fire({
        title: "Sucesso!",
        text: "Você fez login com sucesso.",
        icon: "success",
        confirmButtonText: "OK",
      });

      localStorage.setItem("isLogged", true);

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } else {
      Swal.fire({
        title: "Erro!",
        text: "Usuário ou senha incorretos.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  });
