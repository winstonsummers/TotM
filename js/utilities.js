console.log("loaded utilities");



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

//generate loot, give exp
function dallaBillz() {
    //monster drop and gear they have
    chest();
    resetRoom();
}

function resetRoom(){
    $("#store ol").empty();
        for (var i = 0; i < curRoom.length; i++) {
            $("#store ol").append("<li>" + curRoom[i].name + "</li>");
        }
}

function chest() {
    //randomly generate loot based on monster if apt
    //randomly generate money
}

//pick up function


//previous room 

//talk to
//sell/buy
//rest
//detect traps
//listen at door