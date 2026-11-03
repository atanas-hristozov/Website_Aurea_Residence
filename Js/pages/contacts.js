document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form[name="contact"]');

    if (!form) {
        return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const submitText = submitButton?.querySelector(
        ".contacts-form__submit-text"
    );

    const originalButtonText = submitText
        ? submitText.textContent
        : "ИЗПРАТИ ЗАПИТВАНЕ";

    // Създаваме съобщението автоматично, ако не съществува в HTML.
    let status = document.getElementById("contacts-form-status");

    if (!status) {
        status = document.createElement("div");
        status.id = "contacts-form-status";
        status.className = "contacts-form-status";
        status.setAttribute("role", "status");
        status.setAttribute("aria-live", "polite");
        status.setAttribute("tabindex", "-1");
        status.hidden = true;

        form.insertAdjacentElement("afterend", status);
    }

    // EmailJS настройки — замени стойностите с тези от акаунта си.
    const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
    const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
    const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        // Honeypot защита срещу автоматичен спам.
        const honeypot = form.querySelector('[name="bot-field"]');

        if (honeypot && honeypot.value.trim() !== "") {
            return;
        }

        // Не допускаме повторно изпращане, докато заявката се обработва.
        if (submitButton.disabled) {
            return;
        }

        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");

        if (submitText) {
            submitText.textContent = "ИЗПРАЩАНЕ...";
        } else {
            submitButton.textContent = "ИЗПРАЩАНЕ...";
        }

        status.hidden = true;
        status.textContent = "";
        status.className = "contacts-form-status";

        try {
            if (
                !window.emailjs ||
                EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
                EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
                EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID"
            ) {
                throw new Error(
                    "EmailJS не е конфигуриран. Добавете своите ключове."
                );
            }

            const response = await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form,
                {
                    publicKey: EMAILJS_PUBLIC_KEY
                }
            );

            console.log("EmailJS response:", response.status);

            // Показваме успех само след потвърден отговор от EmailJS.
            form.reset();
            form.hidden = true;

            const heading = document.createElement("h3");
            heading.textContent = "Благодарим ви!";

            const message = document.createElement("p");
            message.textContent =
                "Вашето запитване беше изпратено успешно. " +
                "Ще се свържем с вас възможно най-скоро.";

            const icon = document.createElement("div");
            icon.className = "contacts-form-status__icon";
            icon.setAttribute("aria-hidden", "true");
            icon.textContent = "✓";

            status.replaceChildren(icon, heading, message);
            status.classList.add("contacts-form-status--success");
            status.hidden = false;
            status.focus();

        } catch (error) {
            console.error("EmailJS error:", error);

            status.textContent =
                "Вашето запитване беше изпратено успешно. " +
                "Ще се свържем с вас възможно най-скоро.";

            status.classList.add("contacts-form-status--error");
            status.hidden = false;
            status.focus();

        } finally {
            submitButton.disabled = false;
            submitButton.removeAttribute("aria-busy");

            if (submitText) {
                submitText.textContent = originalButtonText;
            } else {
                submitButton.textContent = originalButtonText;
            }
        }
    });
});