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
console.log(fiveRandomNumbers)


//con un altro ciclo stamperò i numeri random
for(i = 0; i < fiveRandomNumbers.length; i++){

    const pElementHTML = document.createElement('p')
    pElementHTML.innerHTML = fiveRandomNumbers[i]
    containerHTML.append(pElementHTML)

}


//dopo 30 secondi i numeri scompaiono

//vengono chiesti 5 numeri
//il prompt verrà ciclato per 5 volte e i numeri verranno pushati in un array vuoto

//vengono inseriti in un array

//i due array vengono confrontati

//tramite un counter verrà tenuto il conto dei numeri indovinati

//vengono stampati i numeri uguali









//--------------------FUNZIONI-------------------

//CREO UNA FUNZIONE CHE GENERA NUMERI RANDOM
function getRandomNumbersUntilMax(max){

    const number = Math.ceil(Math.random() * max)
    
    return number

}