function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  alert(`Thank you, ${name}! We have received your message.`);
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".photo-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

function closeLightbox() {
  lightbox.style.display = "none";
}

function filterGallery(category) {
  const photos = document.querySelectorAll(".photo-grid img");
  photos.forEach(photo => {
    if (category === "all") {
      photo.style.display = "block";
    } else {
      photo.style.display = photo.classList.contains(category) ? "block" : "none";
    }
  });
}
