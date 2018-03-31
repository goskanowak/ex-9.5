var buttonElement = document.getElementsByClassName('button');
console.log(buttonElement);

// var numberElement = buttonElement;
var x = numberElement.length;
    
for (var a = 0; a < x; a++) {
    var buttonText = buttonElement[a].innerText;
    console.log(buttonText);
    }
