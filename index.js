const cardEl = document.querySelectorAll('.card')

const btnsEl = document.querySelector('#buttons')
const osxEl = document.querySelector('#offsetX')
const osyEl = document.querySelector('#offsetY')
const pageXEl = document.querySelector('#pageX')
const pageYEl = document.querySelector('#pageY')

for(let i = 0; i < cardEl.length; i++){
	cardEl[i].addEventListener('mousedown', grabCard)
	cardEl[i].addEventListener('mousemove', moveCard)
}

let calcX, calcY

function grabCard(e){
	calcX = e.offsetX
	calcY = e.offsetY
}

function moveCard(e){
	const clicked = e.buttons == 1 ? true : false
	const onCard = e.target.classList.contains('card') ? true : false

	btnsEl.textContent = clicked
	osxEl.textContent = e.offsetX
	osyEl.textContent = e.offsetY
	pageXEl.textContent = e.pageX
	pageYEl.textContent = e.pageY

	const posX = (e.pageX - calcX) + 'px'
	const posY = (e.pageY - calcY) + 'px'	

	if (clicked) e.target.style.cssText = `left:${posX};top:${posY}`
	// e.target.style.cssText = clicked && `left:${posX};top:${posY}` // wtf?
}