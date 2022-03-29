var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alfabeto_criptato;
var parola = "";
var nk = 1;
var k = [];

$("form").submit(function (e) {
    e.preventDefault();
});

$("#aggiungi").click(function () {
    nk++;
    $("#chiavi").append('Chiave: <input type="number" name="k' + nk + '" id="k' + nk + '" class="form-control min="1" max="25" required><br>')
});

$("#cripta").click(function () {
    // prendo il valore delle chiavi e le converto in numeri
    for (var i = 0; i < nk; i++) {
        k[i] = Number($("#k" + (i + 1) + "").val());
    }

    // prendo la parola e la trasformo in un array
    parola = $("#parola").val();
    parola = parola.toLowerCase();
    parola = parola.split("");

    // var ar1 = alfabeto.slice(0, k1);
    // var ar2 = alfabeto.slice(k1, alfabeto.length);

    // alfabeto_criptato = ar2.concat(ar1);

    var parola_criptata = "";

    for (var j = 0; j < parola.length; j++) {
        if (parola[j] == " ") {
            var spazio = j;
            j--;
            parola.splice(spazio, 1);
        } else {
            for (var i = 0; i < alfabeto.length; i++) {
                if (parola[j] == alfabeto[i]) {
                    parola_criptata += alfabeto[(i + k[j % nk]) % 26];
                    break;
                }
            }
        }
    }

    if (spazio != null) {
        parola_criptata = parola_criptata.split("");
        parola_criptata.splice(spazio, 0, " ");
        parola_criptata.toString();
    }

    for (var i = 0; i < nk; i++) {
        if (k[i] > 25 || k[i] < 1) { return null }
    }

    $("#parola-criptata").html(parola_criptata);
});