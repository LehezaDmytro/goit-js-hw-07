import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')

galleryItems.forEach(({preview, original, description}) => {
    gallery.insertAdjacentHTML('beforeend', 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>    
    </div>`)
})

gallery.addEventListener('click', clickOnThePicture)

function clickOnThePicture(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
    
    const instance = basicLightbox.create(`
	<img src="${event.target.dataset.source}">
    `, {
        onClose: () => {
            document.removeEventListener('keydown', closeFullSizeImage);
        }
    });
    instance.show();

    document.addEventListener('keydown', closeFullSizeImage)
    function closeFullSizeImage(event) {
    if (event.code === "Escape")
        instance.close();
    }
}

