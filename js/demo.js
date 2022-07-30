'use strict';

// nusitaikyti i html elementa, ir gauti 
const btnEl = document.getElementById('btn');

//  funkcijos struktura. jei nori kad ji veiktu butinai reikia iskviesti
// h2El.textContent = str; === atspausdinam 

function displayH2(str) {
    const h2El = document.getElementById('h2');
    h2El.textContent = str;
}
displayH2('Labas pasauli');

//  === () =>  === tai arou funkcijos aprasas

function displayAsParagraf(value) {
    const paraEl = document.getElementById('para');
    paraEl.textContent = `the value is ${value} !!!`
}
