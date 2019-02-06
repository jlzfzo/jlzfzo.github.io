var invertButton = document.querySelector('.bg-color')
var bodyClass = document.body.classList

invertButton.addEventListener('click', changeColor)


function changeColor() {
	bodyClass.add('invert')
}