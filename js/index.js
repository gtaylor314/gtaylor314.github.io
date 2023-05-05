var lastScrollPosition = 0;

// confirm the DOMContentLoaded event hasn't already triggered
if (document.readyState === "loading") {
    // DOMContentLoaded event has NOT yet triggered
    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", autoHideNavbar);
    });
} else {
    // DOMContentLoaded event has already triggered
    window.addEventListener("scroll", autoHideNavbar);
}

// autoHideNavbar() - hides the navbar when scrolling down, shows when scrolling up
function autoHideNavbar() {
    let navbar = $("#title .navbar");
    let scrollPosition = window.scrollY;
    // if scrolling up
    if (scrollPosition < lastScrollPosition) {
        navbar.removeClass("scrolled-down");
        navbar.addClass("scrolled-up");
    } else {
        // scrolling down
        navbar.removeClass("scrolled-up");
        navbar.addClass("scrolled-down");
    }
    lastScrollPosition = scrollPosition;
}