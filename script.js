
// ==========================
// TYPING EFFECT FOR HERO
// ==========================

const words = [
    "Front-End Developer",
    "Back-End Developer",
    "Mobile-app developer",
    "UI / UX Designer",
    "Tech Enthusiast",
    "Problem Solver"
];

const typingElement = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length + 1) {
        typingSpeed = 1500; // pause after typing full word
        isDeleting = true;
    } 
    
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();




const form = document.getElementById("contactForm");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        window.location.href = "thankyou.html";
    } else {
        alert("Something went wrong. Try again.");
    }
});



// ============================
// SCROLL NAVBAR ACTIVE HIGHLIGHT
// ============================

// Select all sections and navbar links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar-items a");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 150; // 150px offset for sticky navbar
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY + 150;
    let currentSection = "";

    if (scrollPosition < 300) {
        currentSection = "hero"; // 👈 force Home active at top
    }

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});





const menu = document.getElementById("mobile");
const nav = document.getElementById("navbar-items");
const close = document.getElementById("close");

    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
    });



close.addEventListener("click", () => {
    nav.classList.remove("active");
});

document.querySelectorAll("#navbar-items a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});