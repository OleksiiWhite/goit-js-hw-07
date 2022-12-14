import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const addGalleryHtml = createGalleryHtml(galleryItems);

function createGalleryHtml(items) {
  return items
    .map(
      item =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
    )
    .join('');
}

galleryRef.innerHTML = addGalleryHtml;
galleryRef.addEventListener('click', onImageclick);

function onImageclick(e) {
  blockedStandartAction(e);

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src = "${e.target.dataset.source}" width = "800" height = "600">`,
    {
      onShow: instance => console.log('onShow', instance),
      onClose: instance => console.log('onClose', instance),
    }
  );
  instance.show();

  galleryRef.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}

function blockedStandartAction(e) {
  e.preventDefault();
}
