// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// CONTACT BUTTON
// ===============================

const contactBtn =
    document.getElementById("contactBtn");

contactBtn.addEventListener("click", function () {

    alert(
        "Thank you for contacting Abid Ansari!"
    );

});
// Scroll Top Button
const scrollTop = document.getElementById("scrollTop");

// Show button when scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTop.classList.add("show");
    } else {
        scrollTop.classList.remove("show");
    }
});

// Scroll to top when button is clicked
scrollTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
