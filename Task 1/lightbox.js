// Lightbox functionality - Adds an X close button to zoomed images

// Select all gallery images
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// Add click event to each gallery image
galleryImages.forEach(function(image) {
    image.addEventListener('click', function() {
        openLightbox(this.src);
    });
});

// Function to open lightbox
function openLightbox(imgSrc) {
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'block';
    
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
    
    // Enable scrolling when lightbox is closed
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking the X button
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
        closeLightbox();
    }
});

// Close lightbox when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});