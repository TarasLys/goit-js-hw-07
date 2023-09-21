import { galleryItems } from './gallery-items.js';


const container = document.querySelector(".gallery") 


const markup = galleryItems.map(({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
    
      
      alt="${description}"
    />
  </a>
</li>`);


container.insertAdjacentHTML("beforeend", markup.join(""));


new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt'
});







