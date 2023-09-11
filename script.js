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

})