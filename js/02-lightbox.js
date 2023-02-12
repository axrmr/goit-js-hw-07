import { galleryItems } from './gallery-items.js';

const galleryWrap = document.querySelector('.gallery');

galleryWrap.innerHTML = createGalleryImgMarkup(galleryItems);

const lightboxGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGalleryImgMarkup(imgInfo = []) {
  return imgInfo
    .map(img => {
      return `
        <a class='gallery__item'
           href=${img.original}>
          <img
            class="gallery__image"
            src="${img.preview}"
            alt="${img.description}" />
        </a>`;
    })
    .join('');
}
