import { galleryItems } from './gallery-items.js';

const galleryWrap = document.querySelector('.gallery');
const makeLightBoxInstance = basicLightbox.create;

galleryWrap.innerHTML = createGalleryImgMarkup(galleryItems);

galleryWrap.addEventListener('click', onGalleryImgClick);

function createGalleryImgMarkup(imgInfo = []) {
  return imgInfo
    .map(img => {
      return `
        <div class="gallery__item">
          <a class="gallery__link"
             href="" >
            <img
              class="gallery__image"
              src="${img.preview}"
              data-src="${img.original}"
              alt="${img.description}"/>
          </a>
        </div> `;
    })
    .join('');
}

function onGalleryImgClick(e) {
  if (e.target.tagName !== 'IMG') {
    return;
  }

  const largeImageUrl = e.target.dataset.src;

  const lightBoxModal = createLighBoxModal(largeImageUrl);

  lightBoxModal.show(listenEscKey);

  e.preventDefault();
}

function createLighBoxModal(src) {
  return makeLightBoxInstance(`<img src=${src} width="800" height="600">`);
}

function listenEscKey(modal) {
  window.addEventListener('keydown', function onKeyDown(e) {
    if (e.key && e.code === 'Escape') {
      modal.close(() => removeEventListener('keydown', onKeyDown));
    }
  });
}
