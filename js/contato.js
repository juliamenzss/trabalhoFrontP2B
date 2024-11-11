document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buttonEnviar").addEventListener("click", function() {

        var mensagem = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            mensagem: document.getElementById("msg").value
        };

        inserirMensagem(mensagem);

        console.log(mensagem);

        document.getElementById("nome").value = '';
        document.getElementById("email").value = '';
        document.getElementById("msg").value = '';

        document.getElementById("mensagemConfirmacao").innerHTML = "Mensagem enviada com sucesso!";
    });
});
