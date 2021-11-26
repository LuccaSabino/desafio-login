function alerta() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if (email == "carecalegendario@basesocial.org"  && senha == "1234") {
        alert ("Usuário logado com sucesso! XD");
    } else {
        alert ("Algo deu errado, verifique o email e a senha! :(")
    }
}    