function myFunction() {
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var colore = document.getElementById("colore").value;
    document.getElementById("password").innerHTML = nome + cognome + colore;
}
