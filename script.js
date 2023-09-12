document.addEventListener("DOMContentLoaded", function() {

    var aktualna_liczba = document.querySelector(".dodawana");
    var poprzednia_liczba = document.querySelector(".poprzednia");
    var znak = document.querySelector(".znak");
    var clear_btn = document.querySelector(".clear");
    var operator = document.querySelectorAll(".operator");
    var numer = document.querySelectorAll(".numer");
    var wynik = document.querySelector(".rownasie");

    numer.forEach(function(numer) {
        numer.addEventListener("click", function(event){
            aktualna_liczba.textContent += event.target.textContent;
        });
    });

    clear_btn.addEventListener("click", function(){
        aktualna_liczba.textContent = "";
        poprzednia_liczba.textContent = "";
        znak.textContent = "";
    });

    operator.forEach(function(operator) {
        operator.addEventListener("click", function(event){
            if(event.target.textContent === "^2") { 

                var aktu = parseFloat(aktualna_liczba.textContent);

                var wynik_war = aktu * aktu; 
                
                aktualna_liczba.textContent = wynik_war.toString();
                poprzednia_liczba.textContent = "";
                znak.textContent = "";
            } else {
                if (aktualna_liczba.textContent != "") {
                    znak.textContent = event.target.textContent;
                    poprzednia_liczba.textContent = aktualna_liczba.textContent;
                    aktualna_liczba.textContent = "";
                } else {
                    znak.textContent = event.target.textContent;
                }
            }
        });
    });
    


    wynik.addEventListener("click", function(){
        var akt = parseFloat(aktualna_liczba.textContent);
        var pop = parseFloat(poprzednia_liczba.textContent);
        var op = znak.textContent;
        var wynik_wartosc = 0;

        switch(op){
            case "+":
                wynik_wartosc = pop + akt;
                break;
            case "-":
                wynik_wartosc = pop - akt;
                break;
            case "*":
                wynik_wartosc = pop * akt;
                break;
            case ":":
                if (akt !== 0) {
                    wynik_wartosc = pop / akt;
                } else {
                    wynik_wartosc = "Błąd";
                }
                break;
        }

        aktualna_liczba.textContent = wynik_wartosc.toString();
        poprzednia_liczba.textContent = "";
        znak.textContent = "";
    });
});
