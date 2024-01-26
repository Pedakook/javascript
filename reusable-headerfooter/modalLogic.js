export function openModal(images, imageSrc, index) {
    let currentIndex = index;  // Use let to make it mutable

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <span class="prev-btn">&lt;</span>
            <img src="${imageSrc}" alt="Modal Image">
            <span class="next-btn">&gt;</span>
        </div>
    `;

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });

    const closeButton = modal.querySelector('.close-btn');
    closeButton.addEventListener('click', function() {
        modal.remove();
    });

    const nextButton = modal.querySelector('.next-btn');
    const prevButton = modal.querySelector('.prev-btn');

    nextButton.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;  // Increment first
            modal.querySelector('img').src = images[currentIndex].large;
        }
        // Update arrow visibility after changing the image
        updateArrowVisibility();
    });

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;  // Decrement first
            modal.querySelector('img').src = images[currentIndex].large;
        }
        // Update arrow visibility after changing the image
        updateArrowVisibility();
    });

    function updateArrowVisibility() {
        prevButton.style.display = (currentIndex === 0) ? 'none' : 'block';
        nextButton.style.display = (currentIndex === images.length - 1) ? 'none' : 'block';
    }

    // Initial arrow visibility setup
    updateArrowVisibility();

    document.body.appendChild(modal);
}
