/* ==========================================================
   GOMBAK-HULU LANGAT GEOPARK
   script.js
   Version : 1.0
==========================================================*/

"use strict";

/*==========================================================
SELECTOR
==========================================================*/

const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

const loader = document.getElementById("loader");

const topBtn = document.getElementById("topBtn");

const counters = document.querySelectorAll("[data-count]");

const revealElements = document.querySelectorAll(".reveal");

/*==========================================================
LOADER
==========================================================*/

window.addEventListener("load", () => {

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 500);

});


/*==========================================================
STICKY HEADER
==========================================================*/

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*==========================================================
MOBILE MENU
==========================================================*/

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon.classList.contains("fa-bars")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/*==========================================================
AUTO CLOSE MENU
==========================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/*==========================================================
SMOOTH SCROLL
==========================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (!href.startsWith("#")) return;

        e.preventDefault();

        const target = document.querySelector(href);

        if (!target) return;

        window.scrollTo({

            top: target.offsetTop - 70,

            behavior: "smooth"

        });

    });

});


/*==========================================================
BACK TO TOP
==========================================================*/

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*==========================================================
COUNTER
==========================================================*/

function animateCounter(counter) {

    const target = +counter.dataset.count;

    const speed = 100;

    let current = 0;

    const increment = Math.ceil(target / speed);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        counter.innerText = current.toLocaleString();

    }, 20);

}


const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: .5

});


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*==========================================================
SCROLL REVEAL
==========================================================*/

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: .15

});


revealElements.forEach(item => {

    revealObserver.observe(item);

});


/*==========================================================
ACTIVE NAVIGATION
==========================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

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


/*==========================================================
PARALLAX HERO
==========================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    hero.style.backgroundPositionY = `${window.scrollY * .4}px`;

});


/*==========================================================
IMAGE FADE
==========================================================*/

const images = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-in");

        }

    });

});

images.forEach(img => {

    imageObserver.observe(img);

});


/*==========================================================
HEADER SHADOW
==========================================================*/

window.addEventListener("scroll", () => {

    if (!header) return;

    header.style.boxShadow =

        window.scrollY > 30

            ? "0 8px 25px rgba(0,0,0,.08)"

            : "none";

});


/*==========================================================
KEYBOARD ACCESSIBILITY
==========================================================*/

document.addEventListener("keyup", e => {

    if (e.key === "Escape") {

        nav.classList.remove("active");

    }

});


/*==========================================================
PREVENT EMPTY FORM
==========================================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Terima kasih. Borang anda telah diterima.");

        form.reset();

    });

}


/*==========================================================
CURRENT YEAR
==========================================================*/

const year = document.querySelector(".current-year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/*==========================================================
END
==========================================================*/

console.log(
    "Gombak-Hulu Langat Geopark Template Loaded Successfully."
);
