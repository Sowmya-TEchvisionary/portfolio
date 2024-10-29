const desktopMessage = document.getElementById('desktop-message');

const checkScreenSize = () => {
    if (window.innerWidth <= 768) { // Adjust the width as necessary
        desktopMessage.style.display = 'block';
    } else {
        desktopMessage.style.display = 'none';
    }
};

// Check on page load
window.onload = checkScreenSize;

// Check on window resize
window.addEventListener('resize', checkScreenSize);

// Existing code...
showMenu('nav-toggle', 'nav-menu');

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }                                                   
    });
};
window.addEventListener('scroll', scrollActive);

function showProjectDetails(title, description, languages, link) {
    alert(`${title}\n\n${description}\n\nLanguages: ${languages}\nLink: ${link}`);
}

// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
