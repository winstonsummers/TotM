console.log("loaded main");
// var userInput = $("#cmd").val()
$("#submit").click(function(e){
	e.preventDefault();
	console.log($("#cmd").val());
	$("#cmd").val("");
});

//response mechanics

//commands link to thier function
//attack, pick up, next room, previous room, talk to,
//spells/maricles, detect/disarm traps, listen at door, 
//open door, kick door, pick door, rest, sell/buy, level up


