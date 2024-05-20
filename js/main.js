let toCart = false;
const cartBtn = document.getElementById('cart-btn')
let price = btn.previousSibling.previousSibling.innerHTML;
console.log(price)
function addToCard() {
	if (!toCart) {
		cartBtn.style.background = 'red';
		cartBtn.innerHTML = 'Убрать из корзины';
		cartBtn.style.color = 'blue';
		cartBtn.style.border = '1px solid red';
		toCart = true;
	} else {
		cartBtn.style.background = 'silver';
		cartBtn.innerHTML = 'Добавить в коризну';
		cartBtn.style.color = 'black';
		cartBtn.style.border = '1px solid black';
		toCart = false;
	}
}