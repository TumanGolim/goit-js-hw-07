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

const galleryItemsMarkup = galleryItems.map(createGalleryItem).join(""); // Використовуємо join для об'єднання рядків
gallery.innerHTML = galleryItemsMarkup;
