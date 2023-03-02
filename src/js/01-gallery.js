// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

function createImgCardsMarkup(galleryItems) {
    return galleryItems.
        map(({ preview, original, description }) => {
            return `
       
          <a alt="self" class="gallery__item" href="${original}" >
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        
            `
    }).join('');
   
      

}


const imgsMarkup = createImgCardsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', imgsMarkup);



let lightbox = new SimpleLightbox('.gallery .gallery__item', { captions: true, captionSelector: 'img', captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

