const CHANGE_TITLE = 'Ура, теперь не скучно 🔥';

const boredNode = document.getElementById('bodyCativity');
const boredTitleNode = document.getElementById('boredTitle');
const boredTextNode = document.getElementById('boredText');
const boredStartBtnNode = document.getElementById('starBtn');

const startHappy = () => {
	fetch('https://www.boredapi.com/api/activity/')
		.then(response => response.json())
		.then(result => {
			const res = result.activity;

			boredTextNode.innerText = res;
			checkChangeText(res);
		});
};

const checkChangeText = res => {
	if (boredTextNode.innerText == res) {
		boredTitleNode.innerText = CHANGE_TITLE;
		boredNode.classList.add('bored--bg');
	}
};

boredStartBtnNode.addEventListener('click', () => {
	startHappy();
});
