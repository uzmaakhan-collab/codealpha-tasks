const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let imgIndex = 0;

// Open Lightbox
galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => {
        imgIndex = index;
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

// Close lightbox
nextBtn.addEventListener("click", () => {
    imgIndex = (imgIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[imgIndex].src;

    lightboxImg.classList.add("fade");
    setTimeout(() => lightboxImg.classList.remove("fade"), 500);
});

prevBtn.addEventListener("click", () => {
    imgIndex = (imgIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[imgIndex].src;

    lightboxImg.classList.add("fade");
    setTimeout(() => lightboxImg.classList.remove("fade"), 500);
});
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next button
nextBtn.addEventListener("click", () => {
    imgIndex = (imgIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[imgIndex].src;
});

// Prev button
prevBtn.addEventListener("click", () => {
    imgIndex = (imgIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[imgIndex].src;
});

// CATEGORY FILTERS
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".active")?.classList.remove("active");
        btn.classList.add("active");

        const category = btn.dataset.category;

        galleryItems.forEach(item => {
            item.style.display =
                category === "all" || item.dataset.category === category
                    ? "block"
                    : "none";
        });
    });
});

// IMAGE FILTER FUNCTION
function applyImageFilter(filterValue) {
    lightboxImg.style.filter = filterValue;
}
