console.log("loaded main");
var userInput;
var data = [];
var curChar = [];
var curRoom = [];
var preRoom = [];
var equiped = [];
var inventory = [];
var monsterCount = 0;
var killCount = 0;
var roomCount=0;
$("#submit").click(function(e) {
    e.preventDefault();
    userInput = $("#cmd").val();
    console.log(userInput);
    $("#cmd").val("").scroll();
    data = userInput.split(" ")
    if (data[0].toUpperCase() == "ATTACK") {
        attack();
    } else if (data[0].toUpperCase() == "PICK-UP") {

    } else if (data[0].toUpperCase() == "NEXT-ROOM") {
        next();
    } else if (data[0].toUpperCase() == "PREVIOUS-ROOM") {

    } else if (data[0].toUpperCase() == "TALK-TO") {

    } else if (data[0].toUpperCase() == "CAST-SPELL") {

    } else if (data[0].toUpperCase() == "DETECT-TRAPS") {

    } else if (data[0].toUpperCase() == "LISTEN-AT-DOOR") {

    } else if (data[0].toUpperCase() == "REST") {

    } else if (data[0].toUpperCase() == "SELL") {

    } else if (data[0].toUpperCase() == "BUY") {

    } else if (data[0].toUpperCase() == "LOAD") {
        $("#book p").append("Let me see where they are...<br>");
        loadChar();
    } else if (data[0].toUpperCase() == "EQUIP") {

    } else if (data[0].toUpperCase() == "UNEQUIP") {

    } else if (data[0].toUpperCase() == "LEVEL-UP") {

    } else if (data[0].toUpperCase() == "RESTART") {
        location.reload();
    } else {
        $("#book p").append(userInput + "<br>");
    }
    // updateScroll();
});

//auto scroll funtion



$("#settings").click(function() {
    $( "#dialog" ).dialog({width: 500});
} );




















