// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// -Stampare a schermo attraverso il for in tutte le proprietà;
// - Creare un array di oggetti di studenti.
// -Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function() {

    //creazione studente
    var studente = {
        "nome": "Antonella",
        "cognome": "Cino",
        "anni": 31
    }

    //stampa a video dati studente
    for (var key in studente) {
        //console.log(studente[key]);
        $('ul.student').append(studente[key])
    }

    //array di studenti

    var classe11 = [

        {
            "nome": "Gianmarco",
            "cognome": "Montanari",
            "anni": 31
        },
        {
            "nome": "Alberto",
            "cognome": "Capone",
            "anni": 25
        },
        {
            "nome": "Martina",
            "cognome": "Ria",
            "anni": 28
        },
        {
            "nome": "Nunzia",
            "cognome": "Fina",
            "anni": 30
        },
        {
            "nome": "Giacomo",
            "cognome": "Suffredini",
            "anni": 22
        },
        {
            "nome": "Alessandro",
            "cognome": "Matonti",
            "anni": 33
        }

    ];


    // prompt utente
    var nomeUser = prompt('Inserisci il tuo nome');
    var cognomeUser = prompt('Inserisci il tuo cognome');
    var anniUser = prompt('Inserisci la tua età');

    var newStudent = {
        "nome": nomeUser,
        "cognome": cognomeUser,
        "anni": anniUser,
    }

    classe11.push(newStudent);

    for (i = 0; i < classe11.length; i++) {
        $('ul.student').append('<li>' + classe11[i].nome + ' ' + classe11[i].cognome + '</li>');
    }
});