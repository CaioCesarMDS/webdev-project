document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  phoneInput.addEventListener("input", function (event) {
    let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length > 10) {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    } else {
      value = value.replace(/(\d{0,2})/, "($1");
    }

    event.target.value = value;
  });
});

document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (user !== "" && password !== "" && phone !== "" && email !== '') {
      Swal.fire({
        title: "Sucesso!",
        text: "Cadastro realizado com sucesso",
        icon: "success",
        confirmButtonText: "OK",
      });

      localStorage.setItem("userName", user);
      localStorage.setItem("userPassword", password);

      setTimeout(() => {
        window.location.href = "/src/pages/Login/index.html";
      }, 3000);
    } else {
      Swal.fire({
        title: "Erro!",
        text: "Preencha todos os campos",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  });
