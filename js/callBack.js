'use strict';
console.log('labas main.js');

const btnEl = document.getElementById('btn');

btnEl.addEventListener('click',() => displayH2('Atspausdink'));   // dazna klaida

function displayH2(str) {
    const h2El = document.getElementById('h2');
    h2El.textContent = str;
    return str;
}
displayH2('Labas pasauli');
console.log( 'funkcijos dispayH2 rezultatas', displayH2());

function displayAsParagraf(value){
    const paraEl = document.getElementById('para');
    paraEl.textContent = `the value is ${value} !!!`;
}



//Pradines funkcijos be colbaco ir veikia

// function myPower(num){    
// const rezult = num ** 3;
// return rezult;
// }
// const rezult = myPower(3);   // nuoseklesnis budas

// displayH2(rezult);
// displayAsParagraf(rezult);

// displayH2(myPower(3));    // matrioska
// console.log('funkcija my power', displayH2);
// kai iskvieciam funkcija ir nepaduodam argumento, gauname funkcijos aprasyma 'displayH2(myPower);'

function myPower(num, callbacfn){    
    const rezult = num ** 3;
    callbacfn(rezult)
    // return rezult;
    }
     myPower(3, displayAsParagraf);   
     myPower(11, displayH2);

     myPower(5, (sk) => {
        console.log('labas tai su arrou funkcija "=>{}"',sk)
     });
     myPower(4, console.log);

    
    // displayH2(rezult);
    // displayAsParagraf(rezult);