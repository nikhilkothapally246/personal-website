// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Check if Formspree is configured
    const formAction = contactForm.getAttribute('action');
    if (formAction && formAction.includes('YOUR_FORM_ID')) {
        formStatus.textContent = '⚠️ Please configure Formspree form ID in index.html (line 253). See instructions in the code comments.';
        formStatus.className = 'form-status error';
        return;
    }
    
    // Set reply-to email
    const emailInput = document.getElementById('email');
    const replyToInput = document.getElementById('replyto');
    if (replyToInput && emailInput) {
        replyToInput.value = emailInput.value;
    }
    
    // Show loading state
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    
    try {
        const formData = new FormData(contactForm);
        const response = await fetch(formAction, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formStatus.textContent = '✅ Thank you! Your message has been sent successfully. I will get back to you soon.';
            formStatus.className = 'form-status success';
            contactForm.reset();
        } else {
            const data = await response.json();
            if (data.errors) {
                throw new Error(data.errors.map(error => error.message).join(', '));
            } else {
                throw new Error('Failed to send message. Please try again.');
            }
        }
    } catch (error) {
        formStatus.textContent = '❌ ' + error.message + ' Please try again or email me directly at nikhil_kothapally@yahoo.com';
        formStatus.className = 'form-status error';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});
