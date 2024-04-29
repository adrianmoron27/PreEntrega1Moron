function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var dolar = 1000;
    var resultado = 0;
    var Euro = 1100;
    var Bitcoin = 64000;

    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("El cambio de pesos a dolares es: " + resultado + " dolares");
    }

    else if (document.getElementById("dos").checked) {
        resultado = valore / Euro;
        alert("El cambio de pesos a euro es: " + resultado + " euros");
    }

    else if (document.getElementById("tres").checked) {
        resultado = valore / Bitcoin;
        alert("El cambio de pesos a bitcoin es: " + resultado + " bitcoins");
    }
}