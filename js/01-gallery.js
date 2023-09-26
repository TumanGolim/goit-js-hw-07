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

function openLightbox(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageSrc = event.target.getAttribute("data-original");
  const alt = event.target.getAttribute("alt");

  const lightbox = basicLightbox.create(`<img src="${imageSrc}" alt="${alt}">`);

  lightbox.show();

  const closeLightboxOnEscape = (e) => {
    if (e.key === "Escape") {
      lightbox.close();
    }
  };

  document.addEventListener("keydown", closeLightboxOnEscape);

  lightbox.on("close", () => {
    document.removeEventListener("keydown", closeLightboxOnEscape);
  });
}

gallery.addEventListener("click", openLightbox);

const galleryItemsMarkup = galleryItems.map(createGalleryItem);
gallery.append(...galleryItemsMarkup);
