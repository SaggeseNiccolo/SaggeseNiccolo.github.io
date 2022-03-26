var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alfabeto_criptato;
var parola = "";
var k1, k2, k3;

$("#btn").click(function () {
    // prendo il valore delle chiavi e le converto in numeri
    k1 = Number($("#k1").val());
    k2 = Number($("#k2").val());
    k3 = Number($("#k3").val());

    // prendo la parola e la trasformo in un array
    parola = $("#parola").val();
    parola = parola.split("");

    var ar1 = alfabeto.slice(0, k1);
    var ar2 = alfabeto.slice(k1, alfabeto.length);

    alfabeto_criptato = ar2.concat(ar1);

    var parola_criptata = "";

    for (var j = 0; j < parola.length; j++) {
        if (parola[j] == " ") {
            spazio = j;
            j--;
            parola.splice(spazio, 1);
            console.log(parola);
        } else {
            for (var i = 0; i < alfabeto.length; i++) {
                if (parola[j] == alfabeto[i]) {
                    console.log("j % 4 = " + (j % 4));
                    if (j % 4 == 0) {
                        parola_criptata += alfabeto[(i + k1) % 26];
                        break;
                    } else if (j % 4 == 1 || j % 4 == 2) {
                        parola_criptata += alfabeto[(i + k2) % 26];
                        break;
                    } else if (j % 4 == 3) {
                        parola_criptata += alfabeto[(i + k3) % 26];
                        break;
                    }
                }
            }
        }
    }

    parola_criptata = parola_criptata.split("");
    parola_criptata.splice(spazio, 0, " ");
    parola_criptata.toString();

    $("#titolo").html(parola_criptata);
});
