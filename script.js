// Carousel Variables
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const indicators = document.querySelectorAll('.indicator');

// Auto-scroll carousel
function autoScroll() {
    moveCarousel(1);
    setTimeout(autoScroll, 5000);
}

// Move carousel
function moveCarousel(direction) {
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateCarousel();
}

// Go to specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Update carousel position
function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });
}

// Buy product function
function buyProduct(productName, sizeElementId) {
    const selectedSize = document.querySelector(`input[name="${sizeElementId}"]:checked`);
    const size = selectedSize ? selectedSize.value : 'P';
    
    // Your WhatsApp number (replace with your number: 55 + DDD + number)
    const whatsappNumber = '55XXXXXXXXXX';
    
    // Message to send
    const message = `Olá! Gostaria de comprar: *${productName}* - Tamanho: *${size}*`;
    
    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
}

// Start auto-scroll when page loads
window.addEventListener('load', () => {
    autoScroll();
});
