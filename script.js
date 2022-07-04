//Visualizzare in pagina 5 numeri casuali  diversi tra loro. Da lì parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite i prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const panel = document.getElementById('panel');
const display = document.getElementById('display');

//Genero un array di 5 numeri casuali diversi tra di loro
const arrayNumbers = [];

function getRandomNumber (min = 1, max = 100){
    const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randomNumber
}


while(arrayNumbers.length < 5){
    let myNumbers = getRandomNumber(1,100);
    if(!arrayNumbers.includes(myNumbers)){
        arrayNumbers.push(myNumbers)
    }
    
}
panel.innerHTML = arrayNumbers;

//Faccio startare il countdown a partire da 10 secondi,lo blocco a 0 e faccio sparire i numeri generati
 let seconds = 10;
 display.innerText = seconds;

 const countdown = setInterval( function(){
    display.innerText = --seconds;
    
    if(seconds === 0){
        clearInterval(countdown);
        display.innerText = 'Riscrivi ora la lista di numeri in ordine'
        panel.innerText = '';
    }

 },1000);


 //Chiedo all'utente di inserire i numeri in ordine
setTimeout( function(){
    const firstUserNumber = prompt('Inserisci il primo numero della lista');
    const secUserNumber = prompt('Inserisci il secondo numero della lista');
    const thirdUserNumber = prompt('Inserisci il terzo numero della lista');
    const fourthtUserNumber = prompt('Inserisci il quarto numero della lista');
    const fifthUserNumber = prompt('Inserisci il quinto numero della lista');
},12000);