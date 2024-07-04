let myCurrentSlide = 0;
const mySlides = document.querySelectorAll('.slide');
const myTotalSlides = mySlides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    myCurrentSlide = (myCurrentSlide + 1) % myTotalSlides;
    updateSlides();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    myCurrentSlide = (myCurrentSlide - 1 + myTotalSlides) % myTotalSlides;
    updateSlides();
});

function updateSlides() {
    const mySlideWidth = mySlides[0].clientWidth;
    const myNewTransformValue = -myCurrentSlide * mySlideWidth;
    mySlides.forEach(slide => {
        slide.style.transform = `translateX(${myNewTransformValue}px)`;
    });
}

window.addEventListener('resize', updateSlides);
