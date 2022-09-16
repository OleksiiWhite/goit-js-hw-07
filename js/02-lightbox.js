import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const addGalleryHtml = createGalleryHtml(galleryItems);

function createGalleryHtml(items) {
  return items
    .map(
      item =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.discription}"
          />
        </a>
      </li>`
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

  const galleryOn = new SimpleLightbox('.gallery a');
  galleryOn.on('show.simplelightbox', function () {
    `<img src = "${e.target.dataset.source}" width = "800" height = "600">`;
  });

  const altImgLightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

function blockedStandartAction(e) {
  e.preventDefault();
}
