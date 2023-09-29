document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    const menuLinks = document.querySelectorAll(".menu a");
    const currentPageUrl = window.location.href;

    menuLinks.forEach((link) => {
        if (currentPageUrl === link.href) {
            link.classList.add("active-link");
        }
    });

    const customCursor = document.createElement("div");
    customCursor.className = "custom-cursor";
    document.body.appendChild(customCursor);

    document.addEventListener("mousemove", (e) => {
        customCursor.style.left = e.pageX + "px";
        customCursor.style.top = e.pageY + "px";
    });

    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
