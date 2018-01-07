console.log("loaded traps");
var traps=[{
	name: 'Door',
	save: function(){
		paralysis();
	},
	dmg: function(){
		rollIV();
	},
	success: "",
	failure: "",
	death: ""
}]