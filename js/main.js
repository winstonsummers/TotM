console.log("loaded main");
var userInput;
var data = [];
var curChar = [];
var curRoom = [];
var inventory = [];
$("#submit").click(function(e){
	e.preventDefault();
	userInput = $("#cmd").val();
	console.log(userInput);
	$("#cmd").val("").scroll();
	data = userInput.split(" ")
	if(data[0] == "ATTACK"){
		//call attack function
		//add message to log book
	}else if(data[0] == "PICK-UP"){

	}else if(data[0] == "NEXT-ROOM"){
		
	}else if(data[0] == "PREVIOUS-ROOM"){
		
	}else if(data[0] == "TALK-TO"){
		
	}else if(data[0] == "CAST-SPELL"){
		
	}else if(data[0] == "DETECT-TRAPS"){
		
	}else if(data[0] == "LISTEN-AT-DOOR"){
		
	}else if(data[0] == "OPEN-DOOR"){
		
	}else if(data[0] == "KICK-DOOR"){
		
	}else if(data[0] == "PICK-DOOR-LOCK"){
		
	}else if(data[0] == "REST"){
		
	}else if(data[0] == "SELL"){
		
	}else if(data[0] == "BUY"){
		
	}else if(data[0].toUpperCase() == "LOAD"){
		$("#book p").append("Let me see where they are...<br>");
		loadChar();
	}else if(data[0] == "EQUIP"){
		
	}else if(data[0] == "UNEQUIP"){
		
	}else if(data[0] == "LEVEL-UP"){

	}else{
		$("#book p").append(userInput+"<br>");
	}
});

