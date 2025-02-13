
document.getElementById("contatoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    if (name !== '' && email !== '' && mensagem !== '') {
        Swal.fire({
            title: "Sucesso!",
            text: "Mensagem enviada com sucesso",
            icon: "success",
            confirmButtonText: "OK",
        });
    } else {
        Swal.fire({
            title: "Erro!",
            text: "Preencha todos os campos",
            icon: "error",
            confirmButtonText: "OK",
        });
    }
});
