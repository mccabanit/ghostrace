
// player object
const player = {
	character : $("#player"),
	playerPos : 0
}

console.log(player)

// ai object
const ai = {
	character : $("#ai"),
	aiPos : 0
}

console.log(ai)

let playerPosition = 0;
let aiPosition = 0;

// move the player function
player.character.click(function() {
	console.log($(this))

	$(this).animate({
		'left' :  (playerPosition+=100) + 'px'
	})

	console.log('this is the current value of player position: ' + playerPosition)
	player.playerPos = playerPosition

	console.log(player)

	result()
})

const aiMove = (speed) => {
	if(ai.aiPos < 1000) {
		ai.character.animate({
			'left' : (aiPosition+=speed) + "px"
		})
	} else {
		return true
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition
	result()
	setTimeout(()=> aiMove(speed), 500)
}

// move the ai
$("#start").click(function() {
	$("#start").removeClass('d-block')
	$("#start").addClass('d-none')
	aiMove()
})

const result = () => {
	if(player.playerPos == 1000) {
		alert('player won!')
		return true
	}

	if(ai.aiPos == 1000) {
		alert("ai won!")
		return true
	}
}


$(".btn").click(function() {
	// console.log($(this).attr('id') == '1')

	// if($(this).attr('id') == 1) {
	// 	aiMove(20)
	// }

	// if($(this).attr('id') == 2) {
	// 	aiMove(30)
	// }

	// if($(this).attr('id') == 3) {
	// 	aiMove(80)
	// }

})

$('body').keydown(function(e) {
	console.log(e.which)
	if(e.which == 40) {
		alert("hello")
	}
})








