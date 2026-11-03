
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector("#floor-plan-overlay");

    if (!overlay) return;

    const zones = overlay.querySelectorAll("[data-apartment]");

    function selectApartment(zone) {
        const apartmentNumber = zone.dataset.apartment;

        zones.forEach((item) => {
            item.classList.toggle("is-selected", item === zone);
        });

        window.location.href =
            `apartment.html?apartment=${encodeURIComponent(apartmentNumber)}`;
    }

    zones.forEach((zone) => {
        zone.addEventListener("click", () => selectApartment(zone));

        zone.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                selectApartment(zone);
            }
        });
    });
});
