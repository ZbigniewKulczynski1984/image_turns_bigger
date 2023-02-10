const img = document.querySelector('img');

const zoomImg = (e) => {
	const x = e.clientX;
	const y = e.clientY;

	// console.log(x, y)

	const imgX = img.offsetLeft;
	const imgY = img.offsetTop;

	img.classList.add('zoom-img');
};

const removeImg = () => {
	img.classList.remove('zoom-img');
};

img.addEventListener('mousemove', zoomImg);
img.addEventListener('mouseout', removeImg);
