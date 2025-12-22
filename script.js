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

// Project filtering functionality - Initialize on page load
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');
    
    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter project cards with animation
                projectCards.forEach((card, index) => {
                    const category = card.getAttribute('data-category');
                    const shouldShow = filterValue === 'all' || category === filterValue;
                    
                    if (shouldShow) {
                        // Show card with fade-in
                        card.style.display = '';
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, index * 50); // Stagger animation
                    } else {
                        // Hide card with fade-out
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// Mobile navigation buttons for projects page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize project filters
    initProjectFilters();
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

    // Interactive horizontal scroll with mouse drag
    const scrollContainer = document.querySelector('.scroll-container');
    const horizontalScroll = document.querySelector('.horizontal-scroll');
    
    if (scrollContainer && horizontalScroll) {
        let isDown = false;
        let startX;
        let scrollLeft = 0;
        let isDragging = false;
        let dragStartTime = 0;
        let hoverScrollInterval = null;
        let isHoverScrolling = false;

        // Remove CSS animation and enable manual control
        scrollContainer.style.animation = 'none';
        scrollContainer.style.transform = 'translateX(0)';
        scrollContainer.style.transition = 'transform 0.1s ease-out';

        // Get current translateX value
        const getCurrentTransform = () => {
            const transform = scrollContainer.style.transform;
            const match = transform.match(/translateX\((-?\d+(?:\.\d+)?)px\)/);
            return match ? parseFloat(match[1]) : 0;
        };

        // Hover-based scrolling
        let currentScrollDirection = null;
        
        const stopHoverScroll = () => {
            if (hoverScrollInterval) {
                clearInterval(hoverScrollInterval);
                hoverScrollInterval = null;
            }
            isHoverScrolling = false;
            currentScrollDirection = null;
        };
        
        const startHoverScroll = (direction) => {
            // If already scrolling in the same direction, don't restart
            if (isHoverScrolling && currentScrollDirection === direction) return;
            
            // Stop current scrolling if changing direction
            if (isHoverScrolling && currentScrollDirection !== direction) {
                stopHoverScroll();
            }
            
            isHoverScrolling = true;
            currentScrollDirection = direction;
            const scrollSpeed = 2; // pixels per frame
            
            hoverScrollInterval = setInterval(() => {
                const currentTransform = getCurrentTransform();
                const scrollAmount = direction === 'left' ? -scrollSpeed : scrollSpeed;
                const newTransform = currentTransform + scrollAmount;
                
                // Calculate max scroll (content width - container width)
                const containerWidth = horizontalScroll.offsetWidth;
                const contentWidth = scrollContainer.scrollWidth;
                const maxScroll = Math.min(0, containerWidth - contentWidth);
                
                // Clamp the scroll position
                const clampedTransform = Math.max(maxScroll, Math.min(0, newTransform));
                scrollContainer.style.transform = `translateX(${clampedTransform}px)`;
                
                // Stop if we've reached the edge
                if (clampedTransform === maxScroll || clampedTransform === 0) {
                    stopHoverScroll();
                }
            }, 16); // ~60fps
        };

        // Mouse move over horizontal-scroll container for hover scrolling
        horizontalScroll.addEventListener('mousemove', (e) => {
            if (isDown) return; // Don't interfere with dragging
            
            const rect = horizontalScroll.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const containerWidth = rect.width;
            const leftZoneWidth = containerWidth * 0.2; // Left 20% for backward scroll
            const rightZoneWidth = containerWidth * 0.8; // Right 20% for forward scroll
            
            if (mouseX < leftZoneWidth) {
                // Hovering on left side - scroll backwards
                startHoverScroll('left');
            } else if (mouseX > rightZoneWidth) {
                // Hovering on right side - scroll forwards
                startHoverScroll('right');
            } else {
                // Middle zone - stop scrolling
                stopHoverScroll();
            }
        });

        // Stop hover scrolling when mouse leaves
        horizontalScroll.addEventListener('mouseleave', () => {
            stopHoverScroll();
        });

        // Mouse down - start dragging
        scrollContainer.addEventListener('mousedown', (e) => {
            stopHoverScroll(); // Stop hover scrolling when starting to drag
            isDown = true;
            isDragging = false;
            dragStartTime = Date.now();
            scrollContainer.style.cursor = 'grabbing';
            scrollContainer.style.transition = 'none'; // Disable transition during drag
            startX = e.pageX;
            scrollLeft = getCurrentTransform();
            e.preventDefault();
        });

        // Mouse leave - stop dragging
        scrollContainer.addEventListener('mouseleave', () => {
            if (isDown) {
                isDown = false;
                scrollContainer.style.cursor = 'grab';
                scrollContainer.style.transition = 'transform 0.1s ease-out';
            }
        });

        // Mouse up - stop dragging
        scrollContainer.addEventListener('mouseup', (e) => {
            if (isDown) {
                const dragDuration = Date.now() - dragStartTime;
                // Only prevent link click if drag was significant or took time
                if (isDragging || dragDuration > 150) {
                    e.preventDefault();
                    e.stopPropagation();
                    // Store that we prevented the click, so link handlers know
                    e.target.closest('a')?.setAttribute('data-drag-prevented', 'true');
                }
                isDown = false;
                scrollContainer.style.cursor = 'grab';
                scrollContainer.style.transition = 'transform 0.1s ease-out';
                
                // Reset dragging flag after a delay
                setTimeout(() => {
                    isDragging = false;
                    scrollContainer.querySelectorAll('a[data-drag-prevented]').forEach(link => {
                        link.removeAttribute('data-drag-prevented');
                    });
                }, 100);
            }
        });

        // Mouse move - drag scroll
        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            
            const currentX = e.pageX;
            const walk = (currentX - startX) * 1.5; // Scroll speed multiplier
            const newTransform = scrollLeft + walk;
            
            scrollContainer.style.transform = `translateX(${newTransform}px)`;
            
            // Mark as dragging if moved more than 5px
            if (Math.abs(walk) > 5) {
                isDragging = true;
            }
        });

        // Mouse wheel - horizontal scroll
        scrollContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY || e.deltaX;
            const currentTransform = getCurrentTransform();
            const newTransform = currentTransform - (delta * 0.5); // Adjust scroll speed
            scrollContainer.style.transform = `translateX(${newTransform}px)`;
        }, { passive: false });

        // Touch events for mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;

        scrollContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX;
            touchScrollLeft = getCurrentTransform();
            scrollContainer.style.transition = 'none';
        }, { passive: true });

        scrollContainer.addEventListener('touchmove', (e) => {
            if (!touchStartX) return;
            e.preventDefault();
            const touchX = e.touches[0].pageX;
            const walk = (touchX - touchStartX) * 1.5;
            scrollContainer.style.transform = `translateX(${touchScrollLeft + walk}px)`;
        }, { passive: false });

        scrollContainer.addEventListener('touchend', () => {
            touchStartX = 0;
            scrollContainer.style.transition = 'transform 0.1s ease-out';
        }, { passive: true });
    }

}); 