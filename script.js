/* ==========================================
   IRONFORGE FITNESS
   script.js
========================================== */

// ===============================
// SELECT ELEMENTS
// ===============================

const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");
const scrollTop = document.querySelector(".scroll-top");


// ===============================
// MOBILE MENU
// ===============================

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


// Close menu after clicking a link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// ===============================
// STICKY HEADER
// ===============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// ===============================
// ACTIVE NAV LINK
// ===============================

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.style.opacity = "1";
        scrollTop.style.pointerEvents = "auto";

    } else {

        scrollTop.style.opacity = "0";
        scrollTop.style.pointerEvents = "none";

    }

});


// Hide button initially

scrollTop.style.opacity = "0";
scrollTop.style.pointerEvents = "none";


// ===============================
// SIMPLE SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(

".program-card, .trainer-card, .price-card, .why-box, .gallery-item, .testimonial-card, .info-box"

);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

// Initial styles

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = ".7s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// CURRENT YEAR (Optional)
// ===============================

const year = new Date().getFullYear();

console.log("IronForge Fitness © " + year);


// ===============================
// END
// ===============================
