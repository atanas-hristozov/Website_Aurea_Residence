document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery-grid");

    if (!gallery) return;

    const filters = document.querySelectorAll(".gallery-filter");
    const items = Array.from(
        gallery.querySelectorAll(".gallery-item")
    );

    const visibleCount = document.getElementById(
        "gallery-visible-count"
    );

    const emptyMessage = document.getElementById("gallery-empty");

    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxCounter = document.getElementById("lightbox-counter");

    const closeButton = document.getElementById("lightbox-close");
    const previousButton = document.getElementById("lightbox-previous");
    const nextButton = document.getElementById("lightbox-next");

    let activeItems = [];
    let currentIndex = 0;
    let previousFocus = null;

    // Footer year
    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Image filtering
    function applyFilter(category) {
        filters.forEach((filter) => {
            const isActive = filter.dataset.filter === category;

            filter.classList.toggle("is-active", isActive);
            filter.setAttribute("aria-pressed", String(isActive));
        });

        activeItems = items.filter((item) => {
            const matches =
                category === "all" ||
                item.dataset.category === category;

            item.hidden = !matches;

            return matches;
        });

        if (visibleCount) {
            visibleCount.textContent = String(activeItems.length)
                .padStart(2, "0");
        }

        if (emptyMessage) {
            emptyMessage.hidden = activeItems.length > 0;
        }
    }

    filters.forEach((filter) => {
        filter.addEventListener("click", () => {
            applyFilter(filter.dataset.filter);
        });
    });

    // Lightbox
    function updateLightbox() {
        const item = activeItems[currentIndex];

        if (!item) return;

        const image = item.querySelector("img");

        const fullImage =
            item.dataset.full ||
            image.currentSrc ||
            image.src;

        const title =
            item.dataset.title ||
            image.alt ||
            "AUREA RESIDENCE";

        lightboxImage.src = fullImage;
        lightboxImage.alt = image.alt || title;

        lightboxTitle.textContent = title;
        lightboxCaption.textContent = title;

        lightboxCounter.textContent =
            `${String(currentIndex + 1).padStart(2, "0")} / ` +
            `${String(activeItems.length).padStart(2, "0")}`;

        const showNavigation = activeItems.length > 1;

        previousButton.hidden = !showNavigation;
        nextButton.hidden = !showNavigation;
    }

    function openLightbox(item) {
        activeItems = items.filter((galleryItem) => {
            return !galleryItem.hidden;
        });

        currentIndex = activeItems.indexOf(item);

        if (currentIndex < 0) return;

        previousFocus = document.activeElement;

        updateLightbox();

        if (typeof lightbox.showModal === "function") {
            lightbox.showModal();
        } else {
            lightbox.setAttribute("open", "");
        }

        closeButton.focus();
    }

    function closeLightbox() {
        if (typeof lightbox.close === "function" && lightbox.open) {
            lightbox.close();
        } else {
            lightbox.removeAttribute("open");
        }

        lightboxImage.removeAttribute("src");

        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
        }
    }

    function showPrevious() {
        if (activeItems.length < 2) return;

        currentIndex =
            (currentIndex - 1 + activeItems.length) %
            activeItems.length;

        updateLightbox();
    }

    function showNext() {
        if (activeItems.length < 2) return;

        currentIndex =
            (currentIndex + 1) % activeItems.length;

        updateLightbox();
    }

    items.forEach((item) => {
        item.addEventListener("click", () => {
            openLightbox(item);
        });
    });

    closeButton.addEventListener("click", closeLightbox);
    previousButton.addEventListener("click", showPrevious);
    nextButton.addEventListener("click", showNext);

    // Close when clicking the backdrop
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener("keydown", (event) => {
        if (!lightbox.open) return;

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            showPrevious();
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            showNext();
        }

        if (event.key === "Escape") {
            // Native <dialog> handles Escape and fires "close".
            // The fallback handles it for browsers without showModal().
            if (typeof lightbox.showModal !== "function") {
                closeLightbox();
            }
        }
    });

    lightbox.addEventListener("close", () => {
        lightboxImage.removeAttribute("src");

        if (previousFocus && typeof previousFocus.focus === "function") {
            previousFocus.focus();
        }
    });

    // Handle missing image files
    items.forEach((item) => {
        const image = item.querySelector("img");

        image.addEventListener("error", () => {
            item.hidden = true;

            activeItems = activeItems.filter(
                (activeItem) => activeItem !== item
            );

            if (visibleCount) {
                visibleCount.textContent = String(activeItems.length)
                    .padStart(2, "0");
            }

            if (emptyMessage) {
                emptyMessage.hidden = activeItems.length > 0;
            }
        });
    });

    // Initial state
    applyFilter("all");
});