document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
    ];

    let currentIndex = 0;

    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function updateGallery() {
        galleryImage.src = images[currentIndex];
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === images.length - 1;
    }

    function prevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    }

    function nextImage() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateGallery();
        }
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    updateGallery();
});