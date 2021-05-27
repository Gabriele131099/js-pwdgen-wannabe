function myFunction() {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var colore = document.getElementById("colore").value;
    var dataNascita = document.getElementById("dataNascita").value;
    document.getElementById("password").innerHTML = nome + cognome + colore + dataNascita;
}
