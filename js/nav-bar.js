function openMenu() {
    var navbarLinks = document.getElementById("navbarLinks");
    var hamburgerIcon = document.getElementById("hamburgerIcon");
    var closeIcon = document.getElementById("closeIcon");

    navbarLinks.classList.toggle("show");
    hamburgerIcon.classList.toggle("hide");
    closeIcon.classList.toggle("show");
}

function closeMenu() {
    var navbarLinks = document.getElementById("navbarLinks");
    var hamburgerIcon = document.getElementById("hamburgerIcon");
    var closeIcon = document.getElementById("closeIcon");

    navbarLinks.classList.toggle("hide");
    hamburgerIcon.classList.toggle("show");
    closeIcon.classList.toggle("hide");
}

function toggle() {
    var x = document.getElementById("navbarLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}