const parentElement = document.querySelector('.gallery-container');

const overlays = document.querySelectorAll('.overlay');

const modal = document.querySelector('.image-modal');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-btn');

overlays.forEach((overlay) => {
    overlay.addEventListener('click', () => {
        const backgroundImage = getComputedStyle(overlay.parentElement).backgroundImage;
        if (backgroundImage && backgroundImage !== 'none') {
            const imageUrl = backgroundImage.slice(5, -2);
            modal.style.display = 'flex';
            modalImage.src = imageUrl;
        } else {
            console.error("Background image not found for overlay.");
        }
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
