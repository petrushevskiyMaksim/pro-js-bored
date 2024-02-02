const bodyNode = document.querySelector('body');
bodyNode.style.background = '#323531';
bodyNode.style.maxWidth = '1200px';
bodyNode.style.margin = '0px auto';
bodyNode.style.textAlign = 'center';
bodyNode.style.paddingTop = '40px';
bodyNode.style.display = 'flex';
bodyNode.style.flexDirection = 'column';
bodyNode.style.alignItems = 'center';
bodyNode.style.fontSize = '32px';

const bodyCativity = document.getElementById('bodyCativity');

// const img = document.createElement('img');
// img.style.width = '50%';
// img.style.maxHeight = '600px';
// img.style.borderRadius = '20px';

const button = document.createElement('button');
button.style.width = '50%';
button.style.height = '60px';
button.style.borderRadius = '20px';
button.style.backgroundColor = 'blue';
button.style.fontSize = '24px';
button.style.color = 'yellow';
button.style.marginBottom = '30px';
button.type = 'button';
button.textContent = 'Нажми здесь';

bodyNode.insertAdjacentElement('afterbegin', button);

button.addEventListener('click', () => {
	fetch('http://www.boredapi.com/api/activity/')
		.then(response => response.json())
		.then(result => {
			// if (result.status !== 'success') {
			// 	return;
			// }

			const res = result.activity;
			console.log(res);

			// const imgSrc = result.message;
			// img.src = imgSrc;

			bodyCativity.textContent = res;
		});
});
