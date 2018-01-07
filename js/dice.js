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
function toSave(save){
	var roll=rollXX();
	if(roll>=save){
		//insert success flavor text here
	}else if(roll<save){
		//possibly another if statement
		//deal damage
		//check player death
		//insert failure/death flavor text here
	}
}





















