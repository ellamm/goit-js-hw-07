import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

//Gallery Items
const galleryItemsMarkup = createGalleryItemsMarkUp(galleryItems);

galleryRef.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkUp(items) {
  return items.map(({ preview, original, description}) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`).join('');
}

// Open/close original image
galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  const originalImgUrl = e.target.dataset.source;

  const lightBoxModal = basicLightbox.create(
    `<img src= ${originalImgUrl} width="800" height="600">`, {
    onClose: () => document.removeEventListener("keydown", onEscapeKey)
  });
  lightBoxModal.show();

  // Keypad to close the opened image
  document.addEventListener("keydown", onEscapeKey);
  function onEscapeKey(e) {
    if (e.code === 'Escape') {
      lightBoxModal.close();
    }
  };
}