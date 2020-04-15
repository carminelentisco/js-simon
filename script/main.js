/***************************************************************************************************************************\
 * 
 * Esercizio :  Simon Says
 * 
 * Descrizione:
 *  1) Un alert espone 5 numeri casuali (univoci). 
 *  2) Da li parte un timer di 30 secondi.
 *  3) Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
 *  4) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
 *  5) Assicuratevi di saper fare correttamente l’ esercizio con output base (alert() , prompt() , console.log() )
 * 
\***************************************************************************************************************************/

jQuery(document).ready(function ($) {
    
    //console.log('si');
    
    console.log( checkNum() );


});  // <------ End Page

function randomNum( min, max ) {
    
    return Math.floor( Math.random() * ( max - min + 1 ) + min ) ;

}

function checkNum() {

    var listNum = [];

    while ( listNum.length !== 5 ) {
        
        var randomNumber = randomNum( 1, 5 );
        
        if ( listNum.includes(randomNumber) !== true ) {

            listNum.push( randomNumber );
        }

    }

    return listNum;
}