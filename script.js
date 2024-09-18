//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentActive = 0;

nextButton.addEventListener('click', () => {
    currentActive++;
    if (currentActive >= circles.length) {
        currentActive = circles.length - 1; // stay on last circle
    }
    updateCircles();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 0) {
        currentActive = 0; // stay on first circle
    }
    updateCircles();
});

function updateCircles() {
    circles.forEach((circle, index) => {
        if (index < currentActive + 1) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // Disable/enable buttons based on current active circle
    prevButton.disabled = currentActive === 0;
    nextButton.disabled = currentActive === circles.length - 1;
}
