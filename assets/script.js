document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    logo.style.opacity = 0;
    setTimeout(() => {
        logo.style.transition = "opacity 1s";
        logo.style.opacity = 1;
    }, 500);
});

function toggleMenu() {
    const menuItems = document.getElementById("menuItems");
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "block";
    } else {
        menuItems.style.display = "none";
    }
}
