let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('total-slides').innerText = totalSlides;

function updateSlide() {
	slides.forEach((slide, index) => {
		if (index === currentSlide) {
			slide.classList.add('active');
		} else {
			slide.classList.remove('active');
		}
	});

	document.getElementById('slide-num').innerText = currentSlide + 1;

	document.getElementById('prev-btn').disabled = (currentSlide === 0);
	document.getElementById('next-btn').disabled = (currentSlide === totalSlides - 1);
}

function nextSlide() {
	if (currentSlide < totalSlides - 1) {
		currentSlide++;
		updateSlide();
	}
}

function prevSlide() {
	if (currentSlide > 0) {
		currentSlide--;
		updateSlide();
	}
}

document.addEventListener('keydown', function(e) {
	if (e.key === "ArrowRight") {
		nextSlide();
	} else if (e.key === "ArrowLeft") {
		prevSlide();
	}
});

updateSlide();