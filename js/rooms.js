console.log("loaded rooms");
var rooms=[{
	text: "As you push the door open, a distinct odor begins to fill your senses. It's dead silent, a room full of dead bodies. The shock holds you near breathless as you move to the door at the end of the room; yet just before you reach the door you hear a crack like the shatter of bones! As you turn you are confronted by two ghouls standing up and a third crawling towards you.",
	enemies: [{
		name: "Ghoul",
		id: 2,
		number: 3
	}],
	traps: [{
		name: null,
		id: null
	}],
	loot:[{
		type: "Junk",
		name: "Dirty Rags",
		quantity: 1
	}],
},
{
	text:"You come to the next door, a large finely crafted wood door at a time, it has long since rotted. The craftsmenship has served it well though, it's easy to push open when you hear a click",//run the trap and return to room description after
	enemies:[{
		name: "Goblins",
		id: 1,
		number: 6
	}],
	traps: [{
		name: "Door",
		id: 1
	}],
	loot: [{
		type: "Gold",
		name: "Gold",
		quantity: 18
	}]
},
{
	text: "As you pull the door open you feel uneasy. A long hall stretches out in front of you. The light shining through the doorway illuminates a short distance. You light a torch and are amazed at the dust that has gathered, this is clearly not the beaten path. Musk in the air, not the musk of a hall untouch by time. As you reach the end of the hall, you hear the sound ooze dripping from the ceiling. Gross!",
	enemies: [{
		name: "Black Pudding",
		id: 3,
		number: 1
	}],
	traps: [{
		name: null,
		id: null
	}],
	loot:[{
		type: null,
		name: null,
		quantity: null
	}]
},
{
	text: "As you approach the door you hear clicking on the other side. The door knob is rusted and crumbles in your hand. Silence, the door falls down; an four legged insect the size of a pony with a long tail stares at you.",
	enemies: [{
		name: "Rust Monster",
		id: 4,
		number: 1
	}],
	traps:[{
		name: null,
		id:null
	}],
	loot:[{
		type: "",
		name: "",
		quantity: null
	}]
}]
























