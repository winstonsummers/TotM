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
    exp: 300000,
    bab: 2
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
    exp: 2400,
    bab: 0
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
		$("#name").empty().append("Name: "+curChar[0].name);
		$("#level").empty().append("Level: "+curChar[0].level);
		$("#class").empty().append("Class: "+curChar[0].class);
		$("#align").empty().append("Alignment: "+curChar[0].alignment);
		$("#hp").empty().append("Hit Points: "+curChar[0].curhp+"/"+curChar[0].hp);
		$("#ac").empty().append("Armor Class: "+curChar[0].ac);
		$("#str").empty().append("Str: "+curChar[0].str);
		$("#dex").empty().append("Dex: "+curChar[0].dex);
		$("#con").empty().append("Con: "+curChar[0].con);
		$("#int").empty().append("Inst: "+curChar[0].int);
		$("#wis").empty().append("Wis: "+curChar[0].wis);
		$("#cha").empty().append("Cha: "+curChar[0].cha);
		$("#pois").empty().append("Poison: "+curChar[0].poison);
		$("#wand").empty().append("Wands: "+curChar[0].wands);
		$("#para").empty().append("Paralysis: "+curChar[0].paralysis);
		$("#bre").empty().append("Breath: "+curChar[0].breath);
		$("#spell").empty().append("Spells: "+curChar[0].spells);
		$("#exp").empty().append("XP: "+curChar[0].exp);
	};
	

}

//generate character totally randomly
//push new character to array

//level up



















