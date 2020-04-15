/***************************************************************************************************************************\
 * 
 * Esercizio :  Simon Says
 * 
 * Descrizione:
 *  1) Un alert espone 5 numeri casuali (univoci). <
 *  2) Da li parte un timer di 30 secondi. <
 *  3) Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente. <
 *  4) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
 *  5) Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )
 * 
\***************************************************************************************************************************/

jQuery(document).ready(function ($) {

    var listNumberRandom = checkNum();
    alert( 'I numeri da memorizzare sono : ' + listNumberRandom );

    setTimeout( function() {

        var listNumberUser = userNumberInsert();   
        var elementiUguali = [];
        var elementiDiversi = [];

        for ( var i = 0; i < listNumberRandom.length; i++ ) {       

            if ( listNumberRandom.includes( listNumberUser[i] ) ) {

                elementiUguali.push( listNumberUser[i] );

            } else {

                elementiDiversi.push( listNumberUser[i] );

            }
                      
        }

        console.log( 'Lista numeri random : ' + listNumberRandom);
        console.log( 'Numeri inseriti dall utente : ' + listNumberUser);
        console.log( 'Gli elementi uguali sono : ' + elementiUguali);
        console.log( 'Gli elementi diversi sono : ' + elementiDiversi);
                  
    }, 30000);

});  // <------ End Page

function randomNum( min, max ) {
    
    return Math.floor( Math.random() * ( max - min + 1 ) + min ) ;

}

function checkNum() { // Restituisce una lista di numeri controllati 

    var listNum = [];

    while ( listNum.length !== 5 ) {
        
        var randomNumber = randomNum( 1, 5 );
        
        if ( listNum.includes( randomNumber ) !== true ) {

            listNum.push( randomNumber );
        }

    }

    return listNum;
}

function userNumberInsert () { //Richiede 5 numeri all utente

    var listNumberUser = [];

    for ( var i = 0; i < 5; i++ ) {
        
        var userNum = parseInt( prompt( 'Inserisci un numero : ' ) );
        listNumberUser.push( userNum );
    }

    return listNumberUser;

}