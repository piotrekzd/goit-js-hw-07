import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryImages = galleryItems
    .map((image) => {
        const item = `<div class="gallery_item">
        <a class="gallery_link" href="${image.original}">
        <img
        class="gallery_image"
        src="${image.preview}"
        data-src=${image.original}"
        alt="${image.description}"
        />
        </a>
        </div>`
        return item;
    })
    .join(" ");

gallery.insertAdjacentHTML('afterbegin', galleryImages);


console.log(galleryItems);
