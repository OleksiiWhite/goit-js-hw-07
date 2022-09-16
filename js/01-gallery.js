import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createGalleryHtml(items) {
  return items
    .map(
      item =>
        `<div class="gallery_item">
        <a class="gallery_link" href="${item.original}">
          <img
            class="gallary_image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.discription}"
          />
        </a>
      </div>`
    )
    .join('');
}
const addGalleryHtml = createGalleryHtml(galleryItems);

galleryRef.innerHTML = addGalleryHtml;
galleryRef.addEventListener('click', onImageclick);

function onImageclick(e) {
  blockedStandartAction(e);

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src = "${e.target.dataset.source}" width = "800" height = "600">`
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
