$(document).ready(function () {
    console.log("connected");

    //Provide the inital array of letters the user can choose from (the keyboard)
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    //Create a for loop so java can iterate through the choices we have in our array
    for (var i = 0; i < letters.length; i++) {

        //When it iterates through the array..
        //(when you press on a key)

        //It creates a variable named "letterBtn"..
        //Which is now a button tag (<button>)
        var letterBtn = $("<button>")

        //* ADDING A CLASS */
        //Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        //The classes make it so we are able to use them and target additional attributes
        letterBtn.addClass("letter-button letter letter-button-color");

        //* ADDING AN ATTRIBUTE /
        //Now we are giving letterBtn a data-attribute called "data-letter".
        letterBtn.attr("data-letter", letters[i]);

        //Then we give letterBtns a text equal to letters[i]
        letterBtn.text(letters[i]);

        //Append each letterBtn to the #button div (provided)
        $("#buttons").append(letterBtn)

    }

    ///====================================

    //Create an onclick event attached to the letter-button classs
    $(".letter-button").on("click", function () {

        //Inside the onclick event

        //create a variable called "fridgeMagnet"and set the variable equal to a new div.
        var fridgeMagnet = $("<div>");

        //Give each fridgeMagnet the follor clases: "letter fridge-color"
        fridgeMagnet.addClass("letter fridge-color")

        //10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
        // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
        // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.

        fridgeMagnet.text($(this).attr("data-letter"));

        //11.Append the fridgeMagnet variable to the #display div 
        $("#display").append(fridgeMagnet);

    });

    //create an onclick event attached to the clear button
    $("#clear").on("click", function () {
        console.log("clicked clear")
        //Inside the onclick event

        //Use the jQuery "empty()" method to clear the contents of the "#display" div.
        // We use find here and once its found it will empty the element
        $("#display").empty();

    })




})