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

function chest() {
    //randomly generate loot based on monster if apt
    //randomly generate money
}

function resetRoom(){
    $("#store ol").empty();
        for (var i = 0; i < curRoom.length; i++) {
            $("#store ol").append("<li>" + curRoom[i].name + "</li>");
        }
}

//generate loot, give exp
function dallaBillz() {
    //monster drop and gear they have
    chest();
    resetRoom();
}

//monster attacks back
function returnFire(){
    toHit = rollXX();
    if(toHit < curChar[0].ac){
        damage = rollIV();
        curChar[0].curhp = curChar[0].curhp - damage;
        $("#hp").text("Hit Points: "+curChar[0].curhp+"/"+curChar[0].hp);
        $("#book p").append("Your enemy hits you for "+damage+" points!<br>");
        //check for player death
        killChar();
    }else if(toHit > curChar[0].ac){
        $("#book p").append("Your enemy swings and misses you narrowly<br>");
    }else{
        console.log("error in returnFire function");
    }
}

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
        curRoom[0].curhp = curRoom[0].curhp - damage;
        $("#book p").append("You hit your foe for "+damage+" points!<br>");
        deadMon();
        //if miss
    } else if ((toHit - curChar[0].bab) > curRoom[0].ac) {
        $("#book p").append("You swing and miss your foe<br>");
        returnFire();
    } else {
        console.log("error in attack function");
    }
}
//dead monster function
function deadMon(){
    if (curRoom[0].curhp <= 0){
        // dallaBillz();
        curRoom.shift();
        resetRoom();
        monsterCount--;
        $("#book p").append("Your foe falls at your hand. You are Victorious!<br>");
    }else{
        returnFire();
    }
}

//player death
function killChar(){
    if(curChar[0].curhp <= 0){
        inventory = [];
        $("#book p").append("You have been Slayin. Bards will sing of your trials for generations to come...<br>");
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
        curRoom.unshift($.extend(true, [], monsters[0]));
        monsterCount++;
        //add monster to the ol
        resetRoom();
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