/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* TYPED JS */
const typed = new Typed('.typing', {
    strings: ['Software Developer', 'AI Enthusiast', 'Frontend Specialist', 'Data Analyst'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* EMAIL JS */
// Initialize EmailJS with your public key (required for @emailjs/browser v3+)
emailjs.init('Qs2pXsRFAOC4qWQki')

const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // Disable button to prevent double submission
    const btn = contactForm.querySelector('button[type="submit"]')
    btn.disabled = true
    btn.textContent = 'Sending...'

    // serviceID - templateID - #form (publicKey now set via emailjs.init above)
    emailjs.sendForm('service_yoyhpqp', 'template_95ogfp5', '#contact-form')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'
            contactMessage.style.color = 'var(--first-color)'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, (error) => {
            // Show error message with detail
            console.error('EmailJS error:', error)
            contactMessage.textContent = 'Message not sent (service error) ❌'
            contactMessage.style.color = 'red'
        })
        .finally(() => {
            // Re-enable button
            btn.disabled = false
            btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>'
        })
}
contactForm.addEventListener('submit', sendEmail)

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* SHOW SCROLL UP */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* AOS ANIMATION */
AOS.init({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true /* Animations repeat */
})

/* GENERATE PARTICLES */
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size
        const size = Math.random() * 5 + 2 + 'px';
        particle.style.width = size;
        particle.style.height = size;

        // Random position
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';

        // Random animation delay
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = Math.random() * 10 + 10 + 's';

        container.appendChild(particle);
    }
}
createParticles();
