const track = document.querySelector('.gallery-carousel-track');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function updateCarousel() {
    const itemWidth = document.querySelector('.gallery-item').offsetWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth * 5}px)`;
}

nextButton.addEventListener('click', () => {
    const items = document.querySelectorAll('.gallery-item').length;
    if (currentIndex < Math.ceil(items / 5) - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);
