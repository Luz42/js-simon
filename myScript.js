console.log('JS-OK')

/*
Visualizzare in pagina 5 numeri casuali.


Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono

l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/


//vengono generati 5 numeri random
const containerHTML = document.querySelector('.col-12.d-flex.justify-content-between.py-5')
const disappearNumbers = document.getElementById('timerNumberDisappear')
//CREO UN ARRAY VUOTO
const fiveRandomNumbers = []


//INIZIO UN CICLO CHE RIEMPIRà L'ARRAY
while (fiveRandomNumbers.length < 5){

    //PRENDO UN NUMERO RANDOM
    const randomNumber = getRandomNumbersUntilMax(50)

    //SE NON è PRESENTE NELL'ARRAY 
    if(!fiveRandomNumbers.includes(randomNumber)){

        //LO INSERISCO
        fiveRandomNumbers.push(randomNumber)
    }
}

//vengono visualizzati i numeri dell'array
console.log('i numeri generati random sono', fiveRandomNumbers)


//con un altro ciclo stamperò i numeri random
for(let i = 0; i < fiveRandomNumbers.length; i++){
    
    //viene creato un elemento
    const pElementHTML = document.createElement('p')
    
    //viene inserito all'interno il valore
    pElementHTML.innerHTML = fiveRandomNumbers[i]
    
    //l'elemento (p) viene inserito nell'html
    containerHTML.append(pElementHTML)

}

//dopo 30 secondi i numeri scompaiono

setTimeout(function(){

    disappearNumbers.classList.add('d-none')

}, 30000);

//vengono chiesti 5 numeri
//il prompt verrà ciclato per 5 volte e i numeri verranno pushati in un array vuoto

const userNumbers = setTimeout(getUserNumbers, 30200)




//vengono inseriti in un array











//--------------------FUNZIONI-------------------

//CREO UNA FUNZIONE CHE GENERA NUMERI RANDOM
function getRandomNumbersUntilMax(max){

    const number = Math.ceil(Math.random() * max)
    
    return number

}

//FUNZIONE CHE CHIEDE I NUMERI ALL'UTENTE
function getUserNumbers(){

    const userNumbers = []
    
    while (userNumbers.length < 5){
    
        //PRENDO UN NUMERO INSERITO DELL'UTENTE
        const userNumb = parseInt(prompt('Inserisci il numero'))
    
        //SE è UN NUMERO  
        if(!isNaN(userNumb)){
    
            //LO INSERISCO
            userNumbers.push(userNumb)
        }else{
            alert('inserisci un numero')
        }
    }

    console.log('i numeri dell\'user sono:', userNumbers)
//i due array vengono confrontati
let count = 0
 
 for(let i = 0; i<5; i++){
debugger
    if(fiveRandomNumbers[i] === userNumbers[i]){
        //vengono stampati i nuemri indovinati
        console.log('hai indovinato il numero:', userNumbers[i])
    }
    else{
        //tramite un counter verrà tenuto il conto dei numeri sbagliati
        count++
    }
 }
 console.log('Hai sbagliato', count, 'numeri')
};



//vengono stampati i numeri uguali