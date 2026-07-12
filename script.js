// ==========================================
// Element Selection
// ==========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let visibleImages = [];
let currentIndex = 0;

// ==========================================
// Update Visible Images
// ==========================================
function updateVisibleImages() {
    visibleImages = Array.from(galleryItems)
        .filter(item => !item.classList.contains('hide'))
        .map(item => item.querySelector('.gallery-img'));
}

// ==========================================
// Show Image in Lightbox
// ==========================================
function showImage(index) {
    if (index >= visibleImages.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = visibleImages.length - 1;
    } else {
        currentIndex = index;
    }

    lightboxImg.src = visibleImages[currentIndex].src;
}

// ==========================================
// Filter Gallery
// ==========================================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Change Active Button
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const targetCategory = button.getAttribute('data-target');

        // Filter Images
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (targetCategory === 'all' || itemCategory === targetCategory) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });

        // Update Visible Images
        updateVisibleImages();

        // Reset Current Index
        currentIndex = 0;
    });
});

// ==========================================
// Open Lightbox
// ==========================================
document.querySelector('.gallery-container').addEventListener('click', (e) => {

    if (e.target.classList.contains('gallery-img')) {

        lightbox.style.display = 'flex';

        // Prevent background scrolling
        document.body.style.overflow = "hidden";

        const clickedIndex = visibleImages.indexOf(e.target);
        showImage(clickedIndex);
    }

});

// ==========================================
// Close Lightbox
// ==========================================
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = "";
});

// Close when clicking outside image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = "";
    }
});

// ==========================================
// Navigation Buttons
// ==========================================
nextBtn.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

// ==========================================
// Keyboard Navigation
// ==========================================
document.addEventListener('keydown', (e) => {

    if (lightbox.style.display === 'flex') {

        if (e.key === 'ArrowRight') {
            showImage(currentIndex + 1);
        }

        if (e.key === 'ArrowLeft') {
            showImage(currentIndex - 1);
        }

        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            document.body.style.overflow = "";
        }
    }

});

// ==========================================
// Initialize Gallery
// ==========================================
updateVisibleImages();