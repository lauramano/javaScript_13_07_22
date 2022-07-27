'use strict';
console.log('labas main.js');

function displayH2(str) {
    const h2El = document.getElementById('h2');
    h2El.textContent = str;
}

function displayAsParagraf(value){
    const paraEl = document.getElementById('para');
    paraEl.textContent = `the value is ${value} !!!`;
}

displayH2('Labas pasauli');

function myPower(num){    
const rezult = num ** 3;
return rezult;
}
const rezult = myPower(3);   // nuoseklesnis budas

displayH2(rezult);
displayAsParagraf(rezult);

// displayH2(myPower(3));    // matrioska
console.log('funkcija my power', displayH2);
// kai iskvieciam funkcija ir nepaduodam argumento, gauname funkcijos aprasyma 'displayH2(myPower);'