// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Find the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start' // Align to the top of the section
            });
        }
    });
});

// Typewriter Effect for Hero Section
const heroText = document.querySelector('.hero h1');
const text = "KAMATHAM VENKATA SAI MANIKANTA";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust typing speed (100ms per character)
    }
}

// Start the typewriter effect when the page loads
window.addEventListener('load', typeWriter);

// Fade-In Effect for Sections on Scroll
const sections = document.querySelectorAll('section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const isVisible = (sectionTop < window.innerHeight && sectionBottom > 0);

        if (isVisible && !section.classList.contains('visible')) {
            section.classList.add('visible'); // Add 'visible' class to trigger fade-in
        }
    });
}

// Trigger the scroll effect
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Hover Effect for Education Boxes
const educationBoxes = document.querySelectorAll('.education-box');

educationBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-5px)';
        box.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0)';
        box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Hover Effect for Skills Boxes
const skillsBoxes = document.querySelectorAll('.skills-box');

skillsBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-5px)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0)';
    });
});

// Hover Effect for Social Icons
const socialIcons = document.querySelectorAll('.icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.2)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
        icon.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
});