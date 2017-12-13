console.log("loaded create");
var charSelect;
//array for the character
var characters = [{
    name: "John the Cleric",
    level: 10,
    class: "Cleric",
    alignment: "Lawful",
    hp: 70,
    curhp: 70,
    ac: 2,
    str: [16, 2],
    dex: [12, 0],
    con: [14, 1],
    int: [9, 0],
    wis: [17, 2],
    cha: [13, 1],
    poison: 9,
    wands: 10,
    paralysis: 12,
    breath: 14,
    spells: 13,
    exp: 300000
},
{
    name: "Bob B. Bobbington",
    level: 3,
    class: "Thief",
    alignment: "Nuetral",
    hp: 12,
    curhp: 12,
    ac: 4,
    str: [12, 0],
    dex: [18, 3],
    con: [10, 0],
    int: [9, 0],
    wis: [14, 1],
    cha: [16, 2],
    poison: 12,
    wands: 13,
    paralysis: 12,
    breath: 15,
    spells: 14,
    exp: 2400
}];

//load character function
function loadChar(){
	//for loop to find the char
	charSelect = data.splice(1).join(" ");
	for(var i = 0; i<characters.length; i++){
		if(characters[i].name == charSelect){
			curChar = [];
		//push character to curChar array
			curChar.push(characters[i]);
		}	
	}
	if(curChar == undefined){
		$("#book p").append("They are not here right now...<br>")
		//show stats via DOM
	}else{
		$("#name").append(" "+curChar[0].name);
		$("#level").append(" "+curChar[0].level);
		$("#class").append(" "+curChar[0].class);
		$("#align").append(" "+curChar[0].alignment);
		$("#hp").append(" "+curChar[0].hp);
		$("#ac").append(" "+curChar[0].ac);
		$("#str").append(" "+curChar[0].str);
		$("#dex").append(" "+curChar[0].dex);
		$("#con").append(" "+curChar[0].con);
		$("#int").append(" "+curChar[0].int);
		$("#wis").append(" "+curChar[0].wis);
		$("#cha").append(" "+curChar[0].cha);
		$("#pois").append(" "+curChar[0].poison);
		$("#wand").append(" "+curChar[0].wands);
		$("#para").append(" "+curChar[0].paralysis);
		$("#bre").append(" "+curChar[0].breath);
		$("#spell").append(" "+curChar[0].spells);
		$("#exp").append(" "+curChar[0].exp);
	};
	

}

//generate character totally randomly
//push new character to array

//level up



















