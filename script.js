//element section
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let visibleImages = []; 
let currentIndex = 0;

// Update Image
function updateVisibleImages() {
    visibleImages = Array.from(galleryItems)
        .filter(item => !item.classList.contains('hide'))
        .map(item => item.querySelector('.gallery-img'));
}

//Show image
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

// Category filtering logic
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Active Class Change
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const targetCategory = button.getAttribute('data-target');

        // Filtering Gallery
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (targetCategory === 'all' || itemCategory === targetCategory) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });


        updateVisibleImages();
    });
});


// Image Click LightBox Open (depend on filter)
document.querySelector('.gallery-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-img')) {
        lightbox.style.display = 'flex';
        const clickedIndex = visibleImages.indexOf(e.target);
        showImage(clickedIndex);
    }
});


//LightBox Close & Navigation
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.style.display = 'none'; });
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
prevBtn.addEventListener('click', () => showImage(currentIndex - 1));

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'Escape') lightbox.style.display = 'none';
    }
});


updateVisibleImages();
