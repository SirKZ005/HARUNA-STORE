document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    logo.style.opacity = 0;
    setTimeout(() => {
        logo.style.transition = "opacity 1s";
        logo.style.opacity = 1;
    }, 500);
});
