console.log("loaded combat");
var toHit;
var damage;
//array of possible items/weapons/etc.
var weapons = [{
    type: "Weapon",
    name: "Dagger",
    dmg: rollIV(),
    value: 3
}];

//generate loot, give exp

//attack function
function attack() {
    //roll 20 to hit
    toHit = rollXX();
    if (monsterCount == 0) {
        $("#book p").append("You swing... at nothing...<br>");
        //strech goal, fight the shop keeper
    } else if ((toHit - curChar[0].bab) <= curRoom[0].ac) {
        //roll dmg
        damage = rollIV();
        curRoom[0].curhp - damage;
        $("#book p").append("You hit your foe for "+damage+" points!<br>");
        //if miss
    } else if ((toHit - curChar[0].bab) > curRoom[0].ac) {
        $("#book p").append("You swing and miss your foe<br>");
    } else {
        console.log("error in attack function");
    }
}
//pick up function

//next room function 
function next() {
    //disable next room until monsters are gone
    if (monsterCount > 0) {
        $("#book p").append("You must defeat your enemies before you leave<br>");
    } else {
        $("#book p").append("You push the door open...<br>");
        //empty the current room array and ol
        //spawn monster in current room
        curRoom = [];
        curRoom.push(monsters[0]);
        monsterCount++;
        //add monster to the ol
        $("#store ol").empty();
        for (var i = 0; i < curRoom.length; i++) {
            $("#store ol").append("<li>" + curRoom[i].name + "</li>");
        }
    }
    //strech goals
    //roll for surpirse

    //roll for reaction
};
//previous room 

//talk to
//sell/buy
//rest
//spells/maricles
//detect traps
//listen at door