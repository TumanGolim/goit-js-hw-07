import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  image.setAttribute("data-original", item.original);

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function initializeLightbox() {
  const galleryItemsMarkup = galleryItems.map(createGalleryItem);
  gallery.append(...galleryItemsMarkup);

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 500,
  });
}

initializeLightbox();
