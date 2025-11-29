document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const footer = document.getElementById("footer");

    function updateSidebarPosition() {
        const sidebarHeight = sidebar.offsetHeight;
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // The bottom position of the sidebar if it's fixed
        const sidebarBottom = scrollY + sidebarHeight;

        // If the sidebar would overlap the footer, pin it above the footer
        if (sidebarBottom >= footerTop) {
            sidebar.style.position = "absolute";
            sidebar.style.top = (footerTop - sidebarHeight) + "px";
        } else {
            // Otherwise keep it fixed while scrolling
            sidebar.style.position = "fixed";
            sidebar.style.top = "70px"; // height of your navbar
        }
    }

    // Run on load and scroll
    window.addEventListener("scroll", updateSidebarPosition);
    window.addEventListener("resize", updateSidebarPosition);
    updateSidebarPosition();
});