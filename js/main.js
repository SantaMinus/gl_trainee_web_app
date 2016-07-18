use strict;
$( document ).ready(function() {
    $("#email").keypress(function(event) {
        if(event.which == 13) 
            alert("You have successfully subscribed to our news!");
    });
});