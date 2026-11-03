document.addEventListener("DOMContentLoaded", () => {
    const apartments = {
        "A-01": {
            number: "A-01",
            floor: 0,
            type: "Апартамент",
            area: 166,
            bedrooms: 3,
            bathrooms: 2,
            balconies: 1,
            exposure: "Север / Запад",
            description:
                "Разгледайте архитектурното разпределение на апартамента и открийте потенциала на всяко пространство.",
            plan: "apartment_01.JPG",
            interior: "interior_01.jpg"
        },

        "A-02": {
            number: "A-02",
            floor: 0,
            type: "Апартамент",
            area: 142,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Запад / Юг",
            description:
                "Функционално жилищно пространство с възможност за индивидуално обзавеждане.",
            plan: "apartment_02.JPG",
            interior: "interior_02.jpg"
        },

        "A-03": {
            number: "A-03",
            floor: 1,
            type: "Апартамент",
            area: 72,
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            exposure: "Изток",
            description:
                "Разгледайте архитектурното разпределение на апартамента и открийте потенциала на всяко пространство.",
            plan: "apartment_03.JPG",
            interior: "interior_03.jpg"
        },

        "A-04": {
            number: "A-04",
            floor: 1,
            type: "Апартамент",
            area: 122,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Изток / Юг / Запад",
            description:
                "Функционално жилищно пространство с възможност за индивидуално обзавеждане.",
            plan: "apartment_04.JPG",
            interior: "interior_04.jpg"
        },

        "A-05": {
            number: "A-05",
            floor: 1,
            type: "Апартамент",
            area: 111,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Запад / Юг",
            description:
                "Разгледайте разпределението и характеристиките на това жилище.",
            plan: "apartment_05.JPG",
            interior: "interior_05.jpg"
        },

        "A-06": {
            number: "A-06",
            floor: 1,
            type: "Апартамент",
            area: 74,
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            exposure: "Север / Запад",
            description:
                "Открийте пространство, което можете да превърнете в свой дом.",
            plan: "apartment_06.JPG",
            interior: "interior_06.jpg"
        },

        "A-07": {
            number: "A-07",
            floor: 1,
            type: "Апартамент",
            area: 115,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Запад / Север / Изток",
            description:
                "Разгледайте плана и възможностите за организация на пространството.",
            plan: "apartment_07.JPG",
            interior: "interior_07.jpg"
        },

        "A-08": {
            number: "A-08",
            floor: 2,
            type: "Апартамент",
            area: 72,
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            exposure: "Изток",
            description:
                "Разгледайте архитектурното разпределение на апартамента и открийте потенциала на всяко пространство.",
            plan: "apartment_03.JPG",
            interior: "interior_03.jpg"
        },

        "A-09": {
            number: "A-09",
            floor: 2,
            type: "Апартамент",
            area: 122,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Изток / Юг / Запад",
            description:
                "Функционално жилищно пространство с възможност за индивидуално обзавеждане.",
            plan: "apartment_04.JPG",
            interior: "interior_04.jpg"
        },

        "A-10": {
            number: "A-10",
            floor: 2,
            type: "Апартамент",
            area: 111,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Запад / Юг",
            description:
                "Разгледайте разпределението и характеристиките на това жилище.",
            plan: "apartment_05.JPG",
            interior: "interior_05.jpg"
        },

        "A-11": {
            number: "A-11",
            floor: 2,
            type: "Апартамент",
            area: 74,
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            exposure: "Север / Запад",
            description:
                "Открийте пространство, което можете да превърнете в свой дом.",
            plan: "apartment_06.JPG",
            interior: "interior_06.jpg"
        },

        "A-12": {
            number: "A-07",
            floor: 2,
            type: "Апартамент",
            area: 115,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Запад / Север / Изток",
            description:
                "Разгледайте плана и възможностите за организация на пространството.",
            plan: "apartment_07.JPG",
            interior: "interior_07.jpg"
        },

        "A-13": {
            number: "A-13",
            floor: 3,
            type: "Апартамент",
            area: 72,
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            exposure: "Изток",
            description:
                "Разгледайте архитектурното разпределение на апартамента и открийте потенциала на всяко пространство.",
            plan: "apartment_03.JPG",
            interior: "interior_03.jpg"
        },

        "A-14": {
            number: "A-14",
            floor: 3,
            type: "Апартамент",
            area: 122,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Изток / Юг / Запад",
            description:
                "Функционално жилищно пространство с възможност за индивидуално обзавеждане.",
            plan: "apartment_04.JPG",
            interior: "interior_04.jpg"
        },

        "A-15": {
            number: "A-15",
            floor: 3,
            type: "Апартамент",
            area: 111,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Запад / Юг",
            description:
                "Разгледайте разпределението и характеристиките на това жилище.",
            plan: "apartment_05.JPG",
            interior: "interior_05.jpg"
        },

        "A-16": {
            number: "A-16",
            floor: 3,
            type: "Апартамент",
            area: 74,
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            exposure: "Север / Запад",
            description:
                "Открийте пространство, което можете да превърнете в свой дом.",
            plan: "apartment_06.JPG",
            interior: "interior_06.jpg"
        },

        "A-17": {
            number: "A-17",
            floor: 3,
            type: "Апартамент",
            area: 115,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            exposure: "Запад / Север / Изток",
            description:
                "Разгледайте плана и възможностите за организация на пространството.",
            plan: "apartment_07.JPG",
            interior: "interior_07.jpg"
        },

        "A-18": {
            number: "A-18",
            floor: 4,
            type: "Апартамент",
            area: 245,
            bedrooms: 4,
            bathrooms: 2,
            balconies: 2,
            exposure: "Изток / Юг / Запад",
            description:
                "Разгледайте архитектурното разпределение на апартамента и открийте потенциала на всяко пространство.",
            plan: "apartment_18.JPG",
            interior: "interior_18.jpg"
        },

        "A-19": {
            number: "A-19",
            floor: 1,
            type: "Апартамент",
            area: 153,
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            exposure: "Север / Запад",
            description:
                "Функционално жилищно пространство с възможност за индивидуално обзавеждане.",
            plan: "apartment_19.JPG",
            interior: "interior_19.jpg"
        },

        "A-20": {
            number: "A-20",
            floor: 1,
            type: "Апартамент",
            area: 122,
            bedrooms: 2,
            bathrooms: 1,
            balconies: 2,
            exposure: "Запад / Север / Изток",
            description:
                "Разгледайте разпределението и характеристиките на това жилище.",
            plan: "apartment_20.JPG",
            interior: "interior_20.jpg"
        },
        "M-01": {
            number: "M-01",
            floor: 1,
            type: "Магазин",
            area: 26,
            bedrooms: "",
            bathrooms: 1,
            balconies: "",
            exposure: "Изток",
            description:
                "Разгледайте разпределението и характеристиките на този магазин.",
            plan: "store_01.JPG",
            interior: "store_01.jpg"
        },
        "M-02": {
            number: "M-02",
            floor: 1,
            type: "Магазин",
            area: 23,
            bedrooms: "",
            bathrooms: 1,
            balconies: "",
            exposure: "Изток",
            description:
                "Разгледайте разпределението и характеристиките на този магазин.",
            plan: "store_02.JPG",
            interior: "store_02.jpg"
        },
        "M-03": {
            number: "M-03",
            floor: 1,
            type: "Магазин",
            area: 66,
            bedrooms: "",
            bathrooms: 1,
            balconies: "",
            exposure: "Изток / Юг",
            description:
                "Разгледайте разпределението и характеристиките на този магазин.",
            plan: "store_03.JPG",
            interior: "store_03.jpg"
        },
        "P-01": {
            number: "P-01",
            floor: null,
            type: "Паркомясто",
            area: 18,
            bedrooms: null,
            bathrooms: null,
            balconies: null,
            exposure: null,
            description:
                "Обособено паркомясто.",
            plan: "parking_02.jpg",
            interior: "parking_01.jpg"
        },
        "P-02": {
            number: "P-02",
            floor: null,
            type: "Гараж",
            area: 24,
            bedrooms: null,
            bathrooms: null,
            balconies: null,
            exposure: null,
            description:
                "Обособен гараж, затворен с автоматична гаражна врата.",
            plan: "parking_01.jpg",
            interior: "parking_01.jpg"
        }
        
    };




    const params = new URLSearchParams(window.location.search);
    const requestedNumber = params.get("apartment") || "A-03";
    const apartment = apartments[requestedNumber];

    const content = document.querySelector("#apartment-content");

    const floorNames = {
        0: "Първи етаж",
        1: "Втори етаж",
        2: "Трети етаж",
        3: "Четвърти етаж",
        4: "Пети етаж"
    };

    if (!apartment) {
        document.querySelector("main").innerHTML = `
            <section class="container apartment-not-found">
                <span class="section-label">AUREA RESIDENCE</span>
                <h1>Апартаментът не е намерен.</h1>
                <p>Моля, изберете жилище от страницата с апартаментите.</p>
                <a href="apartments.html" class="button button--primary">
                    Всички апартаменти
                </a>
            </section>
        `;

        return;
    }

    // --------------------------------------------------
    // HELPER FUNCTIONS
    // --------------------------------------------------

    const setText = (id, value) => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent =
                value === null || value === undefined || value === ""
                    ? "—"
                    : value;
        }
    };

    const formatArea = (area) => {
        if (area === null || area === undefined || area === "") {
            return "Предстои уточняване";
        }

        return `${Number(area).toLocaleString("bg-BG", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })} m²`;
    };

    const formatCount = (count) => {
        if (count === null || count === undefined || count === "") {
            return "—";
        }

        return String(count);
    };

    const floorLabel = floorNames[apartment.floor] || "Етажът не е уточнен";

    // --------------------------------------------------
    // APARTMENT DATA
    // --------------------------------------------------

    document.title = `${apartment.number} | AUREA RESIDENCE`;

    setText("apartment-hero-title", `${apartment.type} ${apartment.number}`);
    setText("apartment-title", `${apartment.type} ${apartment.number}`);
    setText("apartment-hero-subtitle", floorLabel);
    setText("apartment-description", apartment.description);

    setText("apartment-area", formatArea(apartment.area));
    setText("apartment-bedrooms", formatCount(apartment.bedrooms));
    setText("apartment-bathrooms", formatCount(apartment.bathrooms));

    setText("detail-number", apartment.number);
    setText("detail-type", apartment.type);
    setText("detail-floor", floorLabel);
    setText("detail-area", formatArea(apartment.area));
    setText("detail-bedrooms", formatCount(apartment.bedrooms));
    setText("detail-bathrooms", formatCount(apartment.bathrooms));
    setText("detail-balconies", formatCount(apartment.balconies));
    setText("detail-exposure", apartment.exposure);

    // --------------------------------------------------
    // CONTACT LINKS
    // --------------------------------------------------

    const inquiryUrl =
        `contacts.html?apartment=${encodeURIComponent(apartment.number)}`;

    const inquiryLink = document.getElementById("apartment-inquiry");
    const ctaLink = document.getElementById("apartment-cta-button");

    if (inquiryLink) {
        inquiryLink.href = inquiryUrl;
    }

    if (ctaLink) {
        ctaLink.href = inquiryUrl;
    }

    // --------------------------------------------------
    // IMAGE PATHS
    // --------------------------------------------------

    const imageBasePath = "../assets/images/apartments/";
    const interiorBasePath = "../assets/images/interiors/";

    const planImage = document.getElementById("apartment-plan-image");
    const plan3DImage = document.getElementById("apartment-plan-3d");
    const interiorImage = document.getElementById("apartment-interior");

    const planPlaceholder = document.getElementById("plan-placeholder");
    const plan3DPlaceholder = document.getElementById("plan-3d-placeholder");
    const interiorPlaceholder = document.getElementById("interior-placeholder");

    // Derive the 3D filename from the existing floor-plan filename.
    // Example: apartment_01.JPG -> apartment_01_3D.png
    const plan3DFile = apartment.plan
        ? apartment.plan.replace(/\.[^.]+$/, "_3D.png")
        : null;

    function configureImage(image, placeholder, src, alt) {
        if (!image) return;

        image.alt = alt;

        if (placeholder) {
            placeholder.hidden = true;
        }

        image.hidden = false;

        image.onerror = () => {
            image.hidden = true;

            if (placeholder) {
                placeholder.hidden = false;
            }
        };

        image.onload = () => {
            image.hidden = false;

            if (placeholder) {
                placeholder.hidden = true;
            }
        };

        image.src = src;
    }

    if (planImage && apartment.plan) {
        configureImage(
            planImage,
            planPlaceholder,
            imageBasePath + apartment.plan,
            `Архитектурен план на ${apartment.number}`
        );
    }

    if (plan3DImage && plan3DFile) {
        configureImage(
            plan3DImage,
            plan3DPlaceholder,
            imageBasePath + plan3DFile,
            `3D визуализация на разпределението на ${apartment.number}`
        );
    }

    if (interiorImage) {
        const interiorFile = apartment.interior || "interior_01.jpg";

        configureImage(
            interiorImage,
            interiorPlaceholder,
            interiorBasePath + interiorFile,
            `Интериорна визуализация на ${apartment.number}`
        );
    }

    // --------------------------------------------------
    // IMAGE LIGHTBOX — WORKING ZOOM
    // --------------------------------------------------

    const lightbox = document.getElementById("apartment-lightbox");
    const lightboxImage = document.getElementById("apartment-lightbox-image");
    const lightboxCaption = document.getElementById("apartment-lightbox-caption");
    const lightboxClose = document.getElementById("apartment-lightbox-close");

    function openLightbox(image) {
        if (!image || image.hidden || !image.src) return;

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = image.alt || "Визуализация";

        if (typeof lightbox.showModal === "function") {
            lightbox.showModal();
        } else {
            lightbox.setAttribute("open", "");
        }

        document.body.classList.add("lightbox-open");
    }

    function closeLightbox() {
        if (!lightbox) return;

        if (typeof lightbox.close === "function" && lightbox.open) {
            lightbox.close();
        } else {
            lightbox.removeAttribute("open");
        }

        document.body.classList.remove("lightbox-open");
        lightboxImage.src = "";
    }

    document.querySelectorAll("[data-apartment-zoom]").forEach((button) => {
        button.addEventListener("click", () => {
            const imageId = button.dataset.apartmentZoom;
            const image = document.getElementById(imageId);

            openLightbox(image);
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener("click", (event) => {
            // Close when the backdrop is clicked, not when the image is clicked.
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        lightbox.addEventListener("close", () => {
            document.body.classList.remove("lightbox-open");
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox?.open) {
            closeLightbox();
        }
    });

    // --------------------------------------------------
    // OTHER APARTMENTS
    // --------------------------------------------------

    const otherApartments = document.getElementById("other-apartments");

    if (otherApartments) {
        otherApartments.replaceChildren();

        Object.values(apartments)
            .filter((item) => item.number !== apartment.number)
            .slice(0, 3)
            .forEach((item) => {
                const link = document.createElement("a");

                link.className = "other-apartment-card";
                link.href =
                    `apartment.html?apartment=${encodeURIComponent(item.number)}`;

                const label = document.createElement("span");
                label.className = "section-label";
                label.textContent =
                    floorNames[item.floor] || `Етаж ${item.floor}`;

                const title = document.createElement("h3");
                title.textContent = item.number;

                const area = document.createElement("p");
                area.textContent = formatArea(item.area);

                const action = document.createElement("span");
                action.className = "other-apartment-card__action";
                action.textContent = "Разгледай ↗";

                link.append(label, title, area, action);
                otherApartments.appendChild(link);
            });
    }

    // --------------------------------------------------
    // FOOTER YEAR
    // --------------------------------------------------

    const year = document.getElementById("current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});

