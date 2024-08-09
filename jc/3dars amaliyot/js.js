let nav = document.querySelector("nav");

function openHeaderLinks() {
    nav.querySelector('.header_right').style.left = 0;
}

function closeHeaderLinks() {
    nav.querySelector('.header_right').style.left = "-100%";
}