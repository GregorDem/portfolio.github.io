setInterval(() => {
	let date = new Date()
	let hours = String(date.getHours())
	let minutes = String(date.getMinutes())
	let seconds = String(date.getSeconds())
	let time = document.querySelector(".time")
	let colorChange = document.querySelector(".color")
	let arrOfTime = [hours,minutes,seconds]
	arrOfTime.forEach((item,i) => {
	  if (arrOfTime[i].length<2) {
	  	arrOfTime[i] = '0' + arrOfTime[i]
	  	time.innerHTML = arrOfTime[0]+ ':' + arrOfTime[1] + ':' + arrOfTime[2]
	  	colorChange.innerHTML = '#' + arrOfTime[2] + arrOfTime[1] + arrOfTime[0]
	  	document.querySelector(".second-block").style.backgroundColor = `${colorChange.innerHTML}`
	  	
	  } else {
	  	time.innerHTML = arrOfTime[0]+ ':' + arrOfTime[1] + ':' + arrOfTime[2]
	  	colorChange.innerHTML = '#' + arrOfTime[2] + arrOfTime[1] + arrOfTime[0]
	  	document.querySelector(".second-block").style.backgroundColor = `${colorChange.innerHTML}`
	  }
	})

},1000)

