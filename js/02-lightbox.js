import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-original="${item.original}">
      </a>
    </li>
  `;
}

function initializeLightbox() {
  const galleryItemsMarkup = galleryItems.map(createGalleryItem).join("");
  gallery.innerHTML = galleryItemsMarkup;

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 500,
  });
}

initializeLightbox();
