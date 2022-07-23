import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryImages = galleryItems
    .map((image) => {
        const item = `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        alt=${image.description}"
        title="${image.description}"
        />
        </a>
        </div>`
        return item;
    })
    .join(" ");

gallery.insertAdjacentHTML('afterbegin', galleryImages);

new SimpleLightbox('.gallery a', {captionDelay: 250});

console.log(galleryItems);
