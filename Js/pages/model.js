
document.addEventListener("DOMContentLoaded", () => {

    const modelViewer = document.querySelector("#building-model");
    const loader = document.querySelector("#model-loader");
    const progressBar = document.querySelector("#model-progress-bar");
    const percentage = document.querySelector("#model-percentage");
    const loadingText = document.querySelector("#model-loading-text");
    const errorMessage = document.querySelector("#model-error");

    if (!modelViewer || !loader) return;

    // UPDATE LOADING PROGRESS
    modelViewer.addEventListener("progress", (event) => {

        const progress = Math.round(
            event.detail.totalProgress * 100
        );

        progressBar.style.width = `${progress}%`;
        percentage.textContent = `${progress}%`;

        if (progress >= 100) {
            loadingText.textContent = "Подготвяне на модела";
        }

    });


    // MODEL SUCCESSFULLY LOADED
    modelViewer.addEventListener("load", () => {

        progressBar.style.width = "100%";
        percentage.textContent = "100%";
        loadingText.textContent = "Готово";

        modelViewer.classList.add("is-loaded");

        // Short delay for a smoother transition
        setTimeout(() => {
            loader.classList.add("is-hidden");
        }, 400);

    });


    // MODEL LOADING ERROR
    modelViewer.addEventListener("error", () => {

        loadingText.textContent = "Грешка при зареждане";
        errorMessage.classList.add("is-visible");

        percentage.textContent = "";

        progressBar.style.width = "100%";

    });

});
