var buttonElement = document.getElementsByClassName('button');
console.log(buttonElement);

var x = buttonElement.length;
    
for (var a = 0; a < x; a++) {
    var buttonText = buttonElement[a].innerText;
    console.log(buttonText);
    }
