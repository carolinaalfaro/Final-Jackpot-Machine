// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")
a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
var mySound = document.getElementById('you-win');
// cycle images in the following order: CHERRY --> LEMON --> ORANGE

function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} else if (el.src.match ("images/lemon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
	} else if (el.src.match ("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else {
		// do nothing
	}
}
 
function secondImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		el.src = "images/lemon_slot.PNG";
	} else if (el.src.match ("images/lemon_slot.PNG")){
		el.src = "images/bar_slot.PNG";
	} else if (el.src.match ("images/bar_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else {
		// do nothing
	}
}
function thirdImage(el){
	if (el.src.match("images/orange_slot.PNG")){
		el.src = "images/cherry_slot.PNG";
	} else if (el.src.match ("images/cherry_slot.PNG")){
		el.src = "images/seven_slot.PNG";
	} else if (el.src.match ("images/seven_slot.PNG")){
		el.src = "images/watermelon_slot.PNG";
	} else if (el.src.match ("images/watermelon_slot.PNG")){
		el.src = "images/orange_slot.PNG";
	} else {
		// do nothing
	}
}
 
function checkImage(el){
	if (a.src.match("images/cherry_slot.PNG") && b.src.match("images/cherry_slot.PNG") && c.src.match("images/cherry_slot.PNG")){
		mySound.play("you-win");
		console.log("You Won");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
	} else {
	}
}

// LEMON --> BAR --> CHERRY
// function nextImage(el){}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
//function nextImage(el){}

function playSound(el) {
	// when the JACKPOT! button is clicked, play the slot machine sound
	document.getElementById("you-win").play();
}