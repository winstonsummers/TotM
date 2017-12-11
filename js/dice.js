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