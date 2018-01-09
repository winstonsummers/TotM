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
    $("#inventory ol").empty();
    for(var i=0;i<inventory.length;i++){
        $("#inventory ol").append("<li>" + inventory[i].name + "</li>");
    }
}

function chest() {
    //randomly generate loot based on monster if apt
    //randomly generate money
}

//functions for dialogs
$("#settings").click(function() {
    $( "#setDia" ).dialog({width: 500});
} );
$("#char").click(function() {
    $( "#charDia" ).dialog({width: 500});
} );


//pick up function
function take(){
    if (curRoom.length <= 0) {
        $("#book p").append("There is nothing there...<br>");
    }else if (curRoom[data[1]-1].type == "enemy") {
        $("#book p").append("That monster won't fit in your pocket. Please reconsider...<br>");
    }else{
        inventory.unshift(curRoom[data[1]-1]);
        curRoom.splice(data[1]-1, 1);
        resetRoom();
    }
}

//previous room 

//talk to
//sell/buy
//rest
//detect traps
//listen at door