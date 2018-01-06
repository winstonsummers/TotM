console.log("loded dice");
var dice = function(min, max){
	return Math.floor(Math.random() * (max - min) + min);
}

function rollIV() {
	return dice(1, 4);
};
function rollVI() {
	return dice(1, 6);
};
function rollVIII() {
	return dice(1, 8);
};
function rollX() {
	return dice(1, 10);
};
function rollXII() {
	return dice(1, 12);
};
function rollXX() {
	return dice(1, 20);
};
function rollC() {
	return dice(1, 100);
};

//savings throws
	//there is a dryer way to write this.... to be revisited
function poison(){
	var save=rollXX();
	if(save>=curChar[0].poison){
		//insert success flavor text here
	}else if(save<curChar[0].poison){
		//deal damage
		//check player death
		//insert failure/death flavor text here
	}
}
function wands(){
	var save=rollXX();
	if(save>=curChar[0].poison){
		//insert success flavor text here
	}else if(save<curChar[0].poison){
		//deal damage
		//check player death
		//insert failure/death flavor text here
	}
}
function paralysis(){
	var save=rollXX();
	if(save>=curChar[0].poison){
		//insert success flavor text here
	}else if(save<curChar[0].poison){
		//deal damage
		//check player death
		//insert failure/death flavor text here
	}
}
function breath(){
	var save=rollXX();
	if(save>=curChar[0].poison){
		//insert success flavor text here
	}else if(save<curChar[0].poison){
		//deal damage
		//check player death
		//insert failure/death flavor text here
	}
}
function spells(){
	var save=rollXX();
	if(save>=curChar[0].poison){
		//insert success flavor text here
	}else if(save<curChar[0].poison){
		//deal damage
		//check player death
		//insert failure/death flavor text here
	}
}




















