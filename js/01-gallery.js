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
        data-source=${image.original}"
        alt="${image.description}"
        />
        </a>
        </div>`
        return item;
    })
    .join(" ");

gallery.insertAdjacentHTML('afterbegin', galleryImages);

gallery.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') return;

    const instance = basicLightbox.create(`
    <img
    src="${e.target.getAttribute('data-source')}"
    alt="${e.target.getAttribute('alt')}"
    />`,
        {
            onShow: (instance) => {
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') instance.close();
                });
            }
        });
instance.show();
});


// console.log(galleryItems);
