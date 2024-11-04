let currentIndex = 0;
const itemsPerView = 4;

function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction * itemsPerView;

    if (currentIndex < 0) {
        currentIndex = totalItems - (totalItems % itemsPerView || itemsPerView);
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    let newTransform = -currentIndex * (100 / itemsPerView);
    
    // Handle the edge case where remaining items are fewer than itemsPerView
    if (totalItems - currentIndex < itemsPerView) {
        newTransform = -(totalItems - itemsPerView) * (100 / itemsPerView);
    }

    carousel.style.transform = `translateX(${newTransform}%)`;
}
