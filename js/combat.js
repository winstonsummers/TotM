console.log("loaded combat");

//array of possible items/weapons/etc.
var weapons = [{
	type: "Weapon",
	name: "Dagger",
	dmg: rollIV(),
	value: 3
}]

//array for loot on ground/in store

//generate loot, give exp

//attack function

//pick up function

//next room function 
function next(){
	//empty the current room array and ol

	//spawn monster in current room
	curRoom.push(monsters[0]);
	//add monster to the ol
	$("#store ol").empty();
	for (var i=0;i<curRoom.length;i++){
		$("#store ol").append("<li>"+curRoom[i].name+"</li>");
	}
	//disable next room until monsters are dead

	//strech goals
	//roll for surpirse

	//roll for reaction
}

//previous room 

//talk to
//sell/buy
//rest
//spells/maricles
//detect traps
//listen at door
 
