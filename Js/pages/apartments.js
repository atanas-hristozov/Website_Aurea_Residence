document.addEventListener("DOMContentLoaded", () => {
    const floorButtonsContainer = document.querySelector("#floor-buttons");
    const floorPlans = document.querySelectorAll("[data-floor-plan]");
    const buildingHotspots = document.querySelectorAll(
        ".building-hotspot[data-floor]"
    );

    // Заглавия
    const floorTitle = document.getElementById("selected-floor-title-02");
    const buildingFloorTitle = document.getElementById(
        "selected-building-floor-title"
    );
    const floorCount = document.getElementById("floor-unit-count");

    const floorNames = {
        1: "Първи етаж",
        2: "Втори етаж",
        3: "Трети етаж",
        4: "Четвърти етаж",
        5: "Пети етаж",
        6: "Подземен етаж −1",
        7: "Подземен етаж −2"
    };

    if (!floorPlans.length) {
        console.warn("Не са намерени планове с data-floor-plan.");
        return;
    }

    // Броим апартаментите, без магазините M-01, M-02 и M-03.
    function getApartmentCount(plan) {
        const zones = plan.querySelectorAll("[data-apartment]");

        return Array.from(zones).filter((zone) => {
            const number = (zone.dataset.apartment || "")
                .trim()
                .toUpperCase();

            return number && !number.startsWith("M-");
        }).length;
    }

    // Основна функция за избор на етаж.
    function selectFloor(floor, options = {}) {
        const floorNumber = Number(floor);
        const floorName = floorNames[floorNumber];

        if (!floorName) return;

        const selectedPlan = Array.from(floorPlans).find(
            (plan) => Number(plan.dataset.floorPlan) === floorNumber
        );

        if (!selectedPlan) {
            console.warn(`Не е намерен план за етаж ${floorNumber}.`);
            return;
        }

        // Показваме само избрания план.
        floorPlans.forEach((plan) => {
            const isActive = plan === selectedPlan;

            plan.hidden = !isActive;
            plan.classList.toggle("is-active", isActive);
        });

        // Обновяваме всички бутони за избор на етаж.
        document.querySelectorAll("[data-floor]").forEach((button) => {
            const isActive =
                Number(button.dataset.floor) === floorNumber;

            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        // Обновяваме заглавието на разпределението.
        if (floorTitle) {
            floorTitle.textContent = `Разпределение — ${floorName}`;
        } else {
            console.warn(
                'Не е намерен елементът с ID "selected-floor-title-02".'
            );
        }

        // Обновяваме заглавието над визуализацията на сградата.
        if (buildingFloorTitle) {
            buildingFloorTitle.textContent = floorName;
        }

        // Обновяваме брояча.
        if (floorCount) {
            if (floorNumber === 6 || floorNumber === 7) {
                floorCount.textContent = "Паркоместа";
            } else {
                const count = getApartmentCount(selectedPlan);

                floorCount.textContent =
                    `${count} ${count === 1 ? "апартамент" : "апартамента"}`;
            }
        }

        // Запазваме избрания етаж в URL адреса.
        if (options.updateUrl !== false) {
            const url = new URL(window.location.href);
            url.searchParams.set("floor", String(floorNumber));

            window.history.replaceState({}, "", url);
        }

        // При избор от изображението на сградата превъртаме до плана.
        if (options.scroll) {
            document.getElementById("floor-plans")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    // Един обработчик за всички бутони и интерактивни зони.
    document.addEventListener("click", (event) => {
        const button = event.target.closest("[data-floor]");

        if (!button) return;

        const isFloorButton =
            floorButtonsContainer?.contains(button);

        const isBuildingHotspot =
            button.classList.contains("building-hotspot");

        if (!isFloorButton && !isBuildingHotspot) return;

        selectFloor(button.dataset.floor, {
            scroll: isBuildingHotspot
        });
    });

    // Отваряне на апартаменти, магазини и паркоместа.
    document.querySelectorAll(".apartment-zone").forEach((zone) => {
        function openZone() {
            const number = (
                zone.dataset.apartment ||
                zone.dataset.shop ||
                zone.dataset.parking ||
                zone.dataset.number ||
                ""
            ).trim();

            if (!number) return;

            const parentPlan = zone.closest("[data-floor-plan]");
            const parentFloor = Number(parentPlan?.dataset.floorPlan);

            // Определяме типа на обекта.
            const upperNumber = number.toUpperCase();

            let targetPage = "";

            if (upperNumber.startsWith("M-")) {
                // Магазин
                targetPage = `apartment.html?apartment=${encodeURIComponent(number)}`;
            } else if (
                upperNumber.startsWith("P-") ||
                upperNumber.startsWith("PK-")
            ) {
                // Паркомясто
                targetPage = `apartment.html?apartment=${encodeURIComponent(number)}`;
            } else {
                // Апартамент
                if ([6, 7].includes(parentFloor)) return;

                targetPage = `apartment.html?apartment=${encodeURIComponent(number)}`;
            }

            window.location.href = targetPage;
        }

        zone.addEventListener("click", openZone);

        zone.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openZone();
            }
        });
    });

    // Определяме началния етаж от URL адреса.
    const params = new URLSearchParams(window.location.search);
    const requestedFloor = Number(params.get("floor"));

    const availableFloors = Array.from(floorPlans).map(
        (plan) => Number(plan.dataset.floorPlan)
    );

    const initialFloor = availableFloors.includes(requestedFloor)
        ? requestedFloor
        : availableFloors.includes(1)
            ? 1
            : availableFloors[0];

    selectFloor(initialFloor, { updateUrl: false });
});
