console.log("loaded utilities");
//next room function 
function next() {
    //disable next room until monsters are gone
    if (monsterCount > 0) {
        $("#book p").append("You must defeat your enemies before you leave<br>");
    } else {
        curRoom =[];
        for (var i = 0; i < rooms[roomCount].roomObjs.length; i++) {
            if(rooms[roomCount].roomObjs[i].type !== 'enemy' || rooms[roomCount].roomObjs[i].life > 0){
                curRoom.unshift(rooms[roomCount].roomObjs[i]);
            }
        }
        // apply flavor text to log
        $("#book p").append(rooms[roomCount].text+"<br>");
        monsterCount = rooms[roomCount].roomObjs.filter(function(obj){
            return obj.type === 'enemy' && obj.life > 0;
        }).length;
        console.log('number of monsters in the room is', monsterCount);
        //add monster to the ol
        resetRoom();
    }
    //strech goals
    //roll for surpirse

    //roll for reaction
};

//generate loot, give exp
function dallaBillz() {
    //monster drop gear they have
    chest();
    resetRoom();
}

function resetRoom(){
    console.log('curRoom is', curRoom);
    $("#store ol").empty();
    for(var i=0;i<curRoom.length;i++){
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