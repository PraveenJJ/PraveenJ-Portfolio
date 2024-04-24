function toggle() {
    var navbarContainer = document.querySelector(".navbar-container");
    navbarContainer.classList.toggle("fullscreen");
}

// best to use
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos < currentScrollPos) {
//         document.getElementById("navbar").style.top = "-91px"; /* Adjust based on navbar height */
//     } else {
//         document.getElementById("navbar").style.top = "0";
//     }
//     prevScrollpos = currentScrollPos;
// }


var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    // Check if the navbar has the class "fullscreen"
    var isNavbarFullscreen = navbar.classList.contains("fullscreen");

    if (!isNavbarFullscreen) {
        if (prevScrollpos < currentScrollPos) {
            navbar.style.top = "-91px"; /* Adjust based on navbar height */
        } else {
            navbar.style.top = "0";
        }
    }
    
    prevScrollpos = currentScrollPos;
}

// --------------------------------------------------------------
// don't use this
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos < currentScrollPos) {
//         document.getElementById("navbar").classList.add("hidden");
//     } else {
//         document.getElementById("navbar").classList.remove("hidden");
//     }
//     prevScrollpos = currentScrollPos;
// }