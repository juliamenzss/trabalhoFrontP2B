document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buttonLoginAdmin").addEventListener("click", function () {
        
        var objLoginSenha = {
            email: document.getElementById("loginEmail").value,
            senha: document.getElementById("password").value
        };

        console.log("Dados de login:", objLoginSenha);

        if (validarUsuario(objLoginSenha)) {
            window.location.href = "mensagem.html";
        } else {
            document.getElementById("loginError").innerHTML = "E-mail e Senha inválidos";
            document.getElementById("loginError").style.display = "block";
            
            document.getElementById("loginEmail").value = '';
            document.getElementById("password").value = '';
        }
    });
});
