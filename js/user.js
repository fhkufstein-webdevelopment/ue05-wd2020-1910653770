/*
Im Prinzip hab ich zwar verstanden, was ich machen soll, aber habe keine Ahnung, wie ich das umsetzen soll.
Im Internet hab ich auch keinen Lösungsansatz finden können, der sich hier von der Idee her verwenden lässt.
Aufgrund des derzeitigen Arbeitspensums kann ich es mir jedoch nicht leisten noch mehr Stunden mit dieser Aufgabe zu verbringen.
Seit die FH geschlossen hat verbringe ich wesentlich mehr Zeit und zugleich fast die ganze Zeit meines Tages mit dem Abarbeiten
verschiedener Aufgaben (und ich komm auch nicht mehr hinterher...).
Mir ist sehrwohl bewusst, dass das keine gute Idee ist, die Aufgabe so abzugeben, und normalerweise ist das auch nicht meine Art.
Ich werde mir auf jedenfall Ihr Lösungsviedo ansehen (sofern es eins gibt) und dann das Ganze nochmals versuchen.
 */

$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

        else {
            //1. get value from element with id 'username' & 2. create a new element (eingabeUser)
            var userName = document.getElementById('username');
            var userNumber = document.getElementById('number');

            //4. update number of curent users
            var userNumberAktuell = userNumber + 1;

            //3. somehow add them to userListBody
            localStorage.setItem(userNumberAktuell, userName); //Variablen speichern

            return true;
        }

            /*
            Zuerst wollte ich es so machen, aber das funktioniert ja auch nicht, weil es nicht im .js Format ist...
            <tr>
            <td>userNumberAktuell</td>
            <td>userName</td>
            <td><button type="button" class="btn btn-secondary btn-danger deleteTrigger" title="Löschen"><i class="fa fa-trash"></i></button></td>
            </tr>
            */
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here
        localStorage.removeItem('username'); //so können bestimmte Elemete gelöscht werden

    });

    //maybe some code follows here

});