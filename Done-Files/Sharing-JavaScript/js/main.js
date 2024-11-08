let productPhoto = document.getElementById('product-photo');
let colorButtons = document.querySelectorAll('.swatch');

function changeColor() {
	productPhoto.src = 'img/' + productPhoto.className + '-' + this.id + '.jpg';
	
	for(i = 0; i < colorButtons.length; i++) {
		colorButtons[i].classList.remove('selected');
	}
	this.classList.add('selected');
}
for(i = 0; i < colorButtons.length; i++) {
	colorButtons[i].addEventListener('mouseover', changeColor);
}