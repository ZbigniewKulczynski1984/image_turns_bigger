const img = document.querySelector('img');

const zoomImg = (e) => {
	const x = e.clientX;
	const y = e.clientY;

	// console.log(x, y)

	const imgX = img.offsetLeft;
	const imgY = img.offsetTop;

	const newX = (imgX - x) * -1;
	const newY = (imgY - y) *  -1;

	// console.log(newX)

	img.style.transformOrigin = `${newX}px ${newY}px`;

	img.classList.add('zoom-img');
};

const removeImg = () => {
	img.classList.remove('zoom-img');
};

img.addEventListener('mousemove', zoomImg);
img.addEventListener('mouseout', removeImg);
