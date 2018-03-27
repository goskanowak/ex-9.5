// Użyj metody aby pobrać elementy ze strony i przypisz je do zmiennej.

var buttonElement = document.getElementsByClassName('button');
console.log(buttonElement);

//Stwórz pętlę for, która wykona się tyle razy, ile jest elementów na stronie.

var numberElement = buttonElement;
var x = numberElement.length;

//Wewnątrz pętli wykonaj instrukcję, która wyświetli tekst zawarty w każdym z tych buttonów.
    
for (var a = 0; a < x; a++) {
    var buttonText = buttonElement[a].innerText;
    alert(buttonText);
    console.log(buttonText);
    }
