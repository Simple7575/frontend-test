const sideNav = document.querySelector(".nav");
const body = document.querySelector("body");
const closeSideSlider = (e) => {
    if (e) {
        e.preventDefault();
    }
    sideNav.classList.remove("open");
    sideNav.classList.add("close");
    body.classList.remove("lock");
};
const closeBtn = document.querySelector(".close_btn").addEventListener("click", closeSideSlider);
const backgroundCover = document
    .querySelector(".background_cover")
    .addEventListener("click", closeSideSlider);
const hamburgerBtn = document.querySelector(".hamburger_btn").addEventListener("click", (e) => {
    sideNav.classList.remove("close");
    sideNav.classList.add("open");
    body.classList.add("lock");
});
