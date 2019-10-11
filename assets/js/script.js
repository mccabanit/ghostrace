// player object
let player = {
	character : $("#player"),
	playerPos : 0
}

// ai object
const ai = {
	character: $("#ai"),
	aiPos: 0
}


let playerPosition = 0;
let aiPosition = 0;


const aiMove = (speed) => {
	if(ai.aiPos < 1000) {
		ai.character.animate({
		'left' : (aiPosition += 50) + 'px',
		})
	} else {
		return true
	}
	console.log("Ai Position: " + ai.aiPos)
	ai.aiPos = aiPosition
	// setTimeout(aiMove, 500)
	result()
	if(ai.aiPos >= 1000 || player.playerPos >= 1000) {
		alert("finish line na! wag pagala-gala!")
		return true
	}
	else {
		setTimeout(()=> aiMove(speed), 500)
	}
}


const playerMove = (speed) => {
	if(player.playerPos < 1000) {
		player.character.animate({
			'left' : (playerPosition += 50) + 'px',
		})
	} else {
		return true
	}
	console.log("Player Position: " + player.playerPos)
	player.playerPos = playerPosition
	// setTimeout(playerMove, 500)
	result()
	if(ai.aiPos >= 1000 || player.playerPos >= 1000) {
		alert("finish line na! wag pagala-gala!")
		return true
	}
	else {
		setTimeout(()=> playerMove(speed), 500)
	}
}

const result = () => {
	if(ai.aiPos == 1000) {
		alert('ghost # 1 won!')
		player.character.animate({
			'left' : 1000 + 'px',
		})
		return true
	}
	if(player.playerPos == 1000) {
		alert('ghost # 2 won!')
		ai.character.animate({
		'left' : 1000 + 'px',
	})
		return true
	}
}






$(".btn").click(function() {
	

	// if($(this).attr('#easy') ) {
	// 	aiMove(20)
	// 	playerMove(20)
	// }

	// if($(this).attr('#medium') ) {
	// 	aiMove(30)
	// 	playerMove(30)
	// }

	// if($(this).attr('#hard')) {
	// 	aiMove(80)
	// 	playerMove(80)
	// }

	aiMove()
	playerMove()
})



$("#fast1").click(function() {
	// aiMove()
	// playerMove()
		player.character.animate({
			'left' : (playerPosition += 20) + 'px',
		})
})

$("#fast2").click(function() {
	// aiMove()
	// playerMove()
	ai.character.animate({
		'left' : (aiPosition += 20) + 'px',
	})
})

$("#try").click(function() {
	// aiMove()
	// playerMove()
	let aiPos = 0;
	let playerPos = 0;
	ai.character.animate({
		'left' : 0 + 'px',
	})

	player.character.animate({
		'left' : 0 + 'px',
	})

	ai.aiPos = 0;
	player.playerPos = 0;

	$(".second").click(); 
    return false;

	
})
