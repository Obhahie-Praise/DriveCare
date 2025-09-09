let navBtn = document.getElementById('nav-menu-hidden');
let toggleNavigation = document.getElementById('toggleNav');


function toggleNav() {
    if (navBtn.id == 'nav-menu-hidden') {
        navBtn.id = '';
        navBtn.id = 'nav-menu-visible';
        toggleNavigation.id = 'toggle-nav';
    }
}

function removeNav() {
    if (navBtn.id == 'nav-menu-visible') {
        navBtn.id = '';
        navBtn.id = 'nav-menu-hidden';
        toggleNavigation.id = '';

    } 
}

const contactForm = document.getElementById('contact-form')
const submitContactForm = document.getElementById('contact-submit');
const contactName = document.getElementById('name');
const contactEmail = document.getElementById('email');
const contactMessage = document.getElementById('message');
let submitStatus = document.getElementById('status');

contactForm.addEventListener('submit', () => {
    setTimeout(() => {
        contactName.value = '';
        contactEmail.value = '';
        contactMessage.value = '';
        submitStatus.textContent = 'Successfully Submitted ✅'
    }, 1000);
});
