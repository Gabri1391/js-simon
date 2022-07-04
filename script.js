//Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const display = document.getElementById('panel');

//Genero un array di 5 numeri casuali diversi tra di loro
const arrayNumbers = [];

function getRandomNumber (min = 1, max = 100){
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

for(let i = 0; i < 5; i++){
    let randomNumbers = getRandomNumber(1,100);

    while(arrayNumbers.includes(randomNumbers)){
        randomNumbers = getRandomNumber(1,100);
    }
    arrayNumbers.push(randomNumbers);
}

getRandomNumber(min, max);
console.log(randomNumbers)