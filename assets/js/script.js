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
		'left' : (aiPosition += speed) + 'px',
		})
	} else {
		return 
	}
	console.log("Ai Position: " + ai.aiPos)
	ai.aiPos = aiPosition
	// setTimeout(()=> aiMove(speed), 500)
	result()

	if(ai.aiPos > 1000 || player.playerPos > 1000) {
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
			'left' : (playerPosition += speed) + 'px',
		})
	} else {
		return 
	}
	console.log("Player Position: " + player.playerPos)
	player.playerPos = playerPosition
	// setTimeout(()=> playerMove(speed), 500)
	result()

	if(ai.aiPos > 1000 || player.playerPos > 1000) {
		alert("finish line na! wag pagala-gala!")
		return true
	}
	else {
		setTimeout(()=> playerMove(speed), 500)
	}
}

// START GAME 


$(".btn").click(function() {
	$('.difficulty').show()
	$("#start").hide()
	$('.character').fadeIn(1500)

	$("#easy").click(function() {
		$("#fast1").show()
		$("#start").hide()
		$(".difficulty").hide()
		playerMove(90)
		aiMove(90)
	})

	$("#medium").click(function() {
		$("#fast1").show()
		$("#start").hide()
		$(".difficulty").hide()
		playerMove(75)
		aiMove(80)
	})

	$("#hard").click(function() {
		$("#fast1").show()
		$("#start").hide()
		$(".difficulty").hide()
		playerMove(75)
		aiMove(85)
	})

})



$("#player").click(function() {
	$(".difficulty").hide()

	player.character.animate({
		'left' : (playerPosition += 40) + 'px',
		})
	result()
})




const result = () => {
	if(ai.aiPos >= 1000) {
		alert('her enemy pink ghost won!')
		// $(this).stop()
		$("#try").show()
		$(".power").hide()
		$("#start").hide()
		$("#fast1").hide()
		player.character.animate({
			'left' : 1000 + 'px'
		})
		$("#player").fadeOut(1500)
		return true
		
		
	}

	if(player.playerPos >= 1000) {
		alert('your baby white ghost won!')
		$("#try").show()
		$(".power").hide()
		$("#start").hide()
		$("#fast1").hide()
		// $(this).stop()
		ai.character.animate({
			'left' : 1000 + 'px'
		})
		$("#ai").fadeOut(1500)
		return true
		
		
	}

}


$("#try").click(function() {
	$(".difficulty").hide()
})