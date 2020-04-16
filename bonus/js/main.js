$(document).ready(function() {

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

    generateClasse();


    //crazione div studente con handlebar
    $('ul.studentList').on('click', 'li',
        function() {
            var studentSelected = $(this).index();
            var source = document.getElementById("entry-template").innerHTML;
            var template = Handlebars.compile(source);
            var context = { "nameStudent": classe11[studentSelected].nome, "surnameStudent": classe11[studentSelected].cognome, "yearsStudent": classe11[studentSelected].anni };
            var html = template(context);
            $('div.flex').append(html);
            $('div.student').addClass('active');
        }
    );

    $('button.create').click(
        function() {
            $('div.insertNew').show();
            $('ul.studentList').hide();
        }
    )
    $('button#insert').click(
        function() {
            $('div.insertNew').hide();
            $('ul.studentList').show();
            var nomeUser = $('#name').val();
            var cognomeUser = $('#surname').val();
            var anniUser = $('#anni').val();
            var newStudent = {
                "nome": nomeUser,
                "cognome": cognomeUser,
                "anni": anniUser,
            }
            classe11.push(newStudent);
            $('#name').val("");
            $('#surname').val("");
            $('#anni').val("");
            generateClasse();

        }
    )

    $('div.flex').on("click", "button",
        function() {
            $('div.student.active').hide();
        }
    );







    //FUNZIONI-----------------------------------------
    function generateClasse() {
        for (i = 0; i < classe11.length; i++) {
            $('ul.studentList').append('<li><a>' + classe11[i].nome + ' ' + classe11[i].cognome + '</a></li>');
        }
    }

});