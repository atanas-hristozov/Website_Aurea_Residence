document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#header');
    const menuToggle = document.querySelector('#menu-toggle');
    const mobileNavigation = document.querySelector('#main-navigation');
    const desktopNavigation = document.querySelector('#desktop-navigation');

    const mobileBreakpoint = window.matchMedia('(max-width: 900px)');

    if (!header || !menuToggle || !mobileNavigation) {
        return;
    }

    const menuLinks = mobileNavigation.querySelectorAll('a');

    function setMenuState(isOpen) {
        // Менюто може да се отваря само на мобилни устройства.
        if (!mobileBreakpoint.matches) {
            isOpen = false;
        }

        menuToggle.setAttribute('aria-expanded', String(isOpen));

        menuToggle.setAttribute(
            'aria-label',
            isOpen ? 'Затвори менюто' : 'Отвори менюто'
        );

        mobileNavigation.setAttribute('aria-hidden', String(!isOpen));
        mobileNavigation.inert = !isOpen;

        mobileNavigation.classList.toggle('is-open', isOpen);
        menuToggle.classList.toggle('is-active', isOpen);

        document.body.classList.toggle('menu-open', isOpen);
    }

    menuToggle.addEventListener('click', () => {
        const isOpen =
            menuToggle.getAttribute('aria-expanded') === 'true';

        setMenuState(!isOpen);
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            setMenuState(false);
        });
    });

    document.addEventListener('keydown', event => {
        if (
            event.key === 'Escape' &&
            menuToggle.getAttribute('aria-expanded') === 'true'
        ) {
            setMenuState(false);
            menuToggle.focus();
        }
    });

    function updateNavigationMode() {
        const isMobile = mobileBreakpoint.matches;

        // Desktop навигацията е достъпна само на голям екран.
        if (desktopNavigation) {
            desktopNavigation.inert = isMobile;
            desktopNavigation.setAttribute(
                'aria-hidden',
                String(isMobile)
            );
        }

        // Мобилното меню се използва само на малък екран.
        mobileNavigation.inert = true;
        mobileNavigation.setAttribute('aria-hidden', 'true');

        setMenuState(false);

        menuToggle.hidden = !isMobile;
    }

    mobileBreakpoint.addEventListener('change', updateNavigationMode);

    // Визуална промяна на хедъра при скролиране.
    function updateHeaderOnScroll() {
        header.classList.toggle(
            'header-scroll',
            window.scrollY > 20
        );
    }

    window.addEventListener('scroll', updateHeaderOnScroll, {
        passive: true
    });

    updateNavigationMode();
    updateHeaderOnScroll();
});