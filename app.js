const imgBox = document.querySelector('.image-box');
const img = document.querySelector('img');

imgBox.addEventListener('mousemove', (e) => {
	const x = e.clientX - e.target.offsetLeft;
	const y = e.clientY - e.target.offsetTop;

	console.log(x, y);

	img.style.transformOrigin = `${x}px ${y}px`;
	img.style.transform = 'scale(2)';
});

imgBox.addEventListener('mouseleave', () => {
	img.style.transformOrigin = 'center';
	img.style.transform = "scale(1)"
});
