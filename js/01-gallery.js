import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const container = document.querySelector(".gallery") 



const markup = galleryItems.map(({ preview, description, original }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);






container.insertAdjacentHTML("beforeend", markup.join(""));




container.addEventListener('click', event => {
    event.preventDefault();

    
    
    if (event.target.nodeName !== 'IMG') {

    return;
    } 
    

    const largeImageURL = event.target.dataset.source;


  const instance = basicLightbox.create(`<div><img src="${largeImageURL}" alt="" width = "900" /></div>`
    , {
      onClose: (instance) => {
        
        document.removeEventListener('keydown', closeModal);}
    }
  )
    instance.show();



    const closeModal = function (event) {
    if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeModal);
    }
};
    document.addEventListener('keydown', closeModal);
});





