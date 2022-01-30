import SimpleLightbox from "simplelightbox"
import 'simplelightbox/dist/simple-lightbox.min.css'
import { galleryItems } from './gallery-items.js';

function galleryMaker(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
`

    }).join("")

}
galleryMaker(galleryItems);

const galleryEl = galleryMaker(galleryItems)


const gallery = document.querySelector(".gallery")

gallery.insertAdjacentHTML('afterbegin', galleryEl)


gallery.addEventListener("click", onImgClick)

function onImgClick(event) {
    event.preventDefault()
}



const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionPosition: "bottom", captionDelay: 250, captionType: "attr", captionsData: "alt" })