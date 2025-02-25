function toggleDayNight() {
    let e = document.body;
    e.classList.contains("day-mode")
        ? (e.classList.remove("day-mode"), e.classList.add("night-mode"))
        : (e.classList.remove("night-mode"), e.classList.add("day-mode"));
}
function toggleSidebar() {
    let e = document.querySelector(".menu-container"),
        t = document.querySelector(".menu-toggle");
    document.querySelector(".close-sidebar"),
        e.classList.contains("open")
            ? (e.classList.remove("open"),
                t.setAttribute("aria-label", "Menü öffnen"))
            : (e.classList.add("open"),
                t.setAttribute("aria-label", "Menü schließen"));
}
document.addEventListener("DOMContentLoaded", () => {
    let e = new Date().getHours(),
        t = document.body;
    e >= 6 && e < 18
        ? (t.classList.add("day-mode"), t.classList.remove("night-mode"))
        : (t.classList.add("night-mode"), t.classList.remove("day-mode"));
});

const menuToggleButton = document.querySelector(".menu-toggle");
menuToggleButton && menuToggleButton.addEventListener("click", toggleSidebar);
const closeSidebarButton = document.querySelector(".close-sidebar");
closeSidebarButton &&
closeSidebarButton.addEventListener("click", toggleSidebar);
const navLinks = document.querySelectorAll(".sidebar nav ul li a");
function switchToDayMode() {
    document.body.classList.remove("night-mode"),
        document.body.classList.add("day-mode");
}
function switchToNightMode() {
    document.body.classList.remove("day-mode"),
        document.body.classList.add("night-mode");
}
function switchToDayMode() {
    document.body.classList.remove("night-mode"),
        document.body.classList.add("day-mode"),
        (document.querySelector(".stars").style.display = "none");
}
function switchToNightMode() {
    document.body.classList.remove("day-mode"),
        document.body.classList.add("night-mode"),
        (document.querySelector(".stars").style.display = "block");
}
navLinks.forEach((e) => {
    e.addEventListener("click", () => {
        window.innerWidth <= 768 && toggleSidebar();
    });
}),
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        let e = document.getElementById("dropdownNav");
        e.style.display = "block" === e.style.display ? "none" : "block";
    }),
    document.getElementById("sun").addEventListener("click", switchToDayMode),
    document.getElementById("moon").addEventListener("click", switchToNightMode),
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        let e = document.getElementById("dropdownNav");
        "flex" === e.style.display
            ? (e.style.display = "none")
            : (e.style.display = "flex");
    }),
    document.querySelectorAll(".dropdown-nav nav ul li a").forEach(function (e) {
        e.addEventListener("click", function () {
            document.getElementById("dropdownNav").style.display = "none";
        });
    }),
    document.getElementById("sun").addEventListener("click", switchToDayMode),
    document.getElementById("moon").addEventListener("click", switchToNightMode);

const menuToggle = document.querySelector('.menu-toggle');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('click', () => {
    menuContainer.classList.toggle('visible');
});