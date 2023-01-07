import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

galleryItems.forEach(({ preview, original, description }) => {
    gallery.insertAdjacentHTML('beforeend',
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`)
});

const clickOnThePicture = new SimpleLightbox('.gallery__item', { captionDelay: 250, captionsData: 'alt'});
clickOnThePicture.on('show.simplelightbox', function () {});

