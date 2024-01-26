import { loadComponent } from './loadComponents.js';
import { openModal } from './modalLogic.js';

// Load Header and Footer
loadComponent('header', 'header.html');
loadComponent('footer', 'footer.html');
loadComponent('loading-indicator', 'loading.html');

// Fetch gallery images from the JSON file and display them
fetch('galleryImages.json')
    .then(response => response.json())
    .then(images => {
        const galleryContainer = document.querySelector('.gallery-container');
        images.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <img src="${image.thumbnail}" alt="Gallery Image">
            `;
            galleryItem.addEventListener('click', () => openModal(images, image.large, index));
            galleryContainer.appendChild(galleryItem);
        });
    });


    //hide loading element afer page is fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Add a small delay to ensure the indicator is visible briefly
        setTimeout(function () {
          const loadingIndicator = document.getElementById("loading-indicator");
          loadingIndicator.classList.add("hidden");
        }, 50); // Adjust the delay as needed
      });
      