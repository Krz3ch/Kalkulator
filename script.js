    document.addEventListener("DOMContentLoaded", function() {

        aktualna_liczba = document.querySelector(".dodawana");

        poprzednia_liczba = document.querySelector(".poprzednia");

        znak = document.querySelector(".znak");

        clear_btn = document.querySelector(".clear");

        operator = document.querySelectorAll(".operator");

        numer = document.querySelectorAll(".numer");

        wynik = document.querySelector(".rownasie")

        

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
                
                if (aktualna_liczba.textContent != ""){
                    znak.textContent = event.target.textContent;
                    poprzednia_liczba.textContent = aktualna_liczba.textContent;
                    aktualna_liczba.textContent = "";
                }else{
                    znak.textContent = event.target.textContent;
                    aktualna_liczba.textContent == "";
                }
                
                
            });
        });

        wynik.addEventListener("click", function(){

            poprzednia_liczba.textContent = aktualna_liczba.textContent;
            
            akt = parseFloat(aktualna_liczba.textContent);
            pop = parseFloat(poprzednia_liczba.textContent);
            op = znak.textContent;
            wynik_wartosc = 0;
            
            switch(op){
                case "+":
                    wynik_wartosc = akt+pop;
                    break;
                case "-":
                    wynik_wartosc = akt-pop;
                    break;
                case "*":
                    wynik_wartosc = akt*pop;
                    break;
                case ":":
                    wynik_wartosc = akt/pop;
                    break;
            }
            
            poprzednia_liczba.textContent = "";
            znak.textContent = "";
            aktualna_liczba.textContent = wynik_wartosc.toString();
        });
    })