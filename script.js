const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Enhanced mobile navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when window is resized to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Enhanced smooth scrolling with mobile menu handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };


    console.log('Form submitted:', formData);
    

    alert('Thank you for your message! I will get back to you soon.');
    

    contactForm.reset();
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(24, 25, 28, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';
    } else {
        navbar.style.background = 'rgba(24, 25, 28, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';
    }
});


const skillTags = document.querySelectorAll('.skill-tags span');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.classList.add('animate-in');
});

document.querySelectorAll('.scroll-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            setTimeout(() => {
                window.scrollBy({
                    top: 20,
                    behavior: 'smooth'
                });
            }, 500); 
        }
    });
});

// Mobile navigation buttons for projects page
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavButtons = document.querySelectorAll('.mobile-nav-btn');
    console.log('Found mobile nav buttons:', mobileNavButtons.length); // Debug log
    
    // Test each button to make sure it has the correct data-target attribute
    mobileNavButtons.forEach((button, index) => {
        const targetId = button.getAttribute('data-target');
        console.log(`Button ${index + 1}:`, button.textContent, '->', targetId);
        
        // Check if the target section exists
        const target = document.querySelector(`#${targetId}`);
        if (target) {
            console.log(`✅ Target found for ${targetId}`);
        } else {
            console.error(`❌ Target NOT found for ${targetId}`);
        }
    });
    
    mobileNavButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('data-target');
            console.log('Mobile nav button clicked:', targetId); // Debug log
            
            const target = document.querySelector(`#${targetId}`);
            console.log('Target element found:', target); // Debug log
            
            if (target) {
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log('Scrolling to target:', targetId); // Debug log
            } else {
                console.error('Target element not found for:', targetId); // Error log
            }
        });
    });
}); 