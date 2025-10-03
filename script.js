// Hamburger menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', function () {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
  });
}

// Project filter functionality
const projectFilter = document.getElementById('project-filter');
const projectList = document.querySelectorAll('.project-list li');

if (projectFilter) {
  projectFilter.addEventListener('input', function () {
    const filterValue = projectFilter.value.toLowerCase();
    projectList.forEach(function (item) {
      const text = item.textContent.toLowerCase();
      if (text.includes(filterValue)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Contact form validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const name = contactForm.querySelector('#name');
    const email = contactForm.querySelector('#email');
    const message = contactForm.querySelector('#message');
    let valid = true;
    let errorMsg = '';

    if (!name.value.trim()) {
      valid = false;
      errorMsg += 'Please enter your name.\n';
      name.focus();
    } else if (!email.value.trim()) {
      valid = false;
      errorMsg += 'Please enter your email.\n';
      email.focus();
    } else if (!message.value.trim()) {
      valid = false;
      errorMsg += 'Please enter your message.';
      message.focus();
    }

    if (!valid) {
      e.preventDefault();
      alert(errorMsg);
    }
  });
}

// Real-time feedback for contact form
const contactFields = [
  { id: 'name', message: 'Name is required.' },
  { id: 'email', message: 'Email is required.' },
  { id: 'message', message: 'Message is required.' }
];

contactFields.forEach(field => {
  const input = document.getElementById(field.id);
  if (input) {
    input.addEventListener('input', function () {
      let errorSpan = input.nextElementSibling;
      if (!errorSpan || !errorSpan.classList.contains('error-message')) {
        errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.style.color = '#d32f2f';
        errorSpan.style.fontSize = '0.95em';
        errorSpan.style.marginLeft = '8px';
        input.parentNode.insertBefore(errorSpan, input.nextSibling);
      }
      if (!input.value.trim()) {
        errorSpan.textContent = field.message;
      } else {
        errorSpan.textContent = '';
      }
    });
  }
});