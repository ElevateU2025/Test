// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Registration Button Click Handlers - Enhanced with premium effects
    function handleRegistrationClick(event) {
        // Add ripple effect
        createRippleEffect(event.currentTarget, event);
        
        // Show premium registration alert
        setTimeout(() => {
            showPremiumAlert('🎓 ElevateU 2025 Registration', 
                '✨ Registration opening soon!\n\n' +
                '🚀 ElevateU 2025 registration will begin shortly.\n\n' +
                '📧 Early registration: info@elevateu2025.com\n' +
                '📱 Call us: +91 98765 43210\n\n' +
                '🔥 Don\'t miss out - seats are LIMITED!\n' +
                '⚡ BE READY when registration opens!'
            );
        }, 200);
    }
    
    // Add event listeners to all registration buttons
    const registerBtns = document.querySelectorAll('.register-btn');
    const competitionBtns = document.querySelectorAll('.competition-register-btn');
    
    registerBtns.forEach(btn => {
        btn.addEventListener('click', handleRegistrationClick);{
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdoptzchosaQCKOthTS1lKWwfYxRaPc89FccHsA3w6NRMUn6A/viewform';
    });
    
    competitionBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            createRippleEffect(event.currentTarget, event);
            
            if(btn.textContent.includes('Global Gameplan')) {
            window.location.href = ' https://elevateu2025.github.io/Global-Gameplan/'; // Replace with your competition 1 link
        } else {
            window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfdvMQI-XeTuWm6HeSlq_b6AUc4uBzuvCI4xDBuHvGFDG41yw/viewform';  // Replace with your competition 2 link
        }
            
            setTimeout(() => {
                showPremiumAlert(`🏆 ${competitionName}`,
                    `🎯 Thank you for your interest in ${competitionName}!\n\n` +
                    '✅ Open to Class 11 & 12 students only\n' +
                    '✅ Registration opens with main event\n' +
                    '✅ Limited spots available\n\n' +
                    '📧 More info: info@elevateu2025.com\n' +
                    '📱 Call: +91 98765 43210\n\n' +
                    '🔥 Get ready for an AMAZING experience!'
                );
            }, 200);
        });
    });
       
    // Enhanced Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            navbar.style.backdropFilter = 'blur(15px)';
        }
    });
    
    // Enhanced Scroll-triggered Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Add staggered animation for cards
                const cards = entry.target.querySelectorAll('.feature-card, .venue-card, .benefit-card, .community-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const animateSections = document.querySelectorAll('section');
    animateSections.forEach(section => {
        section.classList.add('animate-element');
        observer.observe(section);
    });
    
    // Enhanced Card Hover Effects with premium interactions
    const cards = document.querySelectorAll('.venue-card, .feature-card, .benefit-card, .community-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Add glow effect
            this.style.boxShadow = '0 25px 50px rgba(30, 64, 175, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Memory Image Lightbox Effect with enhanced features
    const memoryImages = document.querySelectorAll('.memory-image');
    
    memoryImages.forEach(img => {
        img.addEventListener('click', function() {
            createLightbox(this);
        });
        
        // Add hover effect
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Active Navigation Link Highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navHeight = document.querySelector('.navbar').offsetHeight;
            
            if (window.scrollY >= (sectionTop - navHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Premium Parallax Effect for Hero Section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // Add loading animation for page
    document.body.classList.add('loaded');
    
    // Initialize premium animations
    initPremiumAnimations();
    
    // Initialize mobile optimizations
    if (isMobile()) {
        initMobileOptimizations();
    }
    
    console.log('🌟 ElevateU 2025 - Premium Event Website Loaded! 🚀');
});

// Enhanced Utility Functions

// Create premium ripple effect
function createRippleEffect(element, event) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add premium gradient to ripple
    ripple.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 70%, transparent 100%)';
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 800);
}

// Premium alert system
function showPremiumAlert(title, message) {
    const alertOverlay = document.createElement('div');
    alertOverlay.className = 'premium-alert-overlay';
    
    alertOverlay.innerHTML = `
        <div class="premium-alert">
            <div class="premium-alert-header">
                <h3>${title}</h3>
                <button class="premium-alert-close">&times;</button>
            </div>
            <div class="premium-alert-content">
                <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            <div class="premium-alert-footer">
                <button class="premium-alert-btn">Got It! 🚀</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(alertOverlay);
    
    // Show with animation
    setTimeout(() => {
        alertOverlay.classList.add('show');
    }, 100);
    
    // Close handlers
    const closeBtn = alertOverlay.querySelector('.premium-alert-close');
    const gotItBtn = alertOverlay.querySelector('.premium-alert-btn');
    
    function closeAlert() {
        alertOverlay.classList.remove('show');
        setTimeout(() => {
            if (alertOverlay.parentNode) {
                alertOverlay.remove();
            }
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeAlert);
    gotItBtn.addEventListener('click', closeAlert);
    alertOverlay.addEventListener('click', (e) => {
        if (e.target === alertOverlay) closeAlert();
    });
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const icons = {
        success: '🎉',
        error: '⚠️',
        info: 'ℹ️'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icons[type] || 'ℹ️'}</span>
            <span class="notification-text">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        hideNotification(notification);
    });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            hideNotification(notification);
        }
    }, 5000);
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Enhanced lightbox for images
function createLightbox(img) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${img.src}" alt="${img.alt}" class="lightbox-image">
            <button class="lightbox-close">&times;</button>
            <div class="lightbox-info">
                <p>${img.alt}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Show lightbox with animation
    setTimeout(() => {
        lightbox.classList.add('show');
    }, 100);
    
    // Close lightbox function
    function closeLightbox() {
        lightbox.classList.remove('show');
        setTimeout(() => {
            if (lightbox.parentNode) {
                lightbox.parentNode.removeChild(lightbox);
            }
        }, 300);
    }
    
    // Event listeners
    lightbox.addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    
    // Prevent closing when clicking on content
    lightbox.querySelector('.lightbox-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeLightbox();
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Check if device is mobile
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Premium animations initialization
function initPremiumAnimations() {
    // Add floating animation to hero elements
    const floatingElements = document.querySelectorAll('.hero-highlights .highlight-item');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('floating');
    });
    
    // Add typewriter effect to main heading
    const mainHeading = document.querySelector('.hero-title');
    if (mainHeading) {
        mainHeading.classList.add('typewriter-effect');
    }
}

// Mobile-specific optimizations
function initMobileOptimizations() {
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Add touch feedback to interactive elements
    const interactiveElements = document.querySelectorAll('button, .card, .nav-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

// Add all necessary styles dynamically
const dynamicStyles = `
    /* Enhanced Ripple Effect */
    .btn, .register-btn, .competition-register-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-effect 0.8s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-effect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Premium Alert Styles */
    .premium-alert-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .premium-alert-overlay.show {
        opacity: 1;
    }
    
    .premium-alert {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 20px;
        max-width: 500px;
        width: 90%;
        color: white;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
    
    .premium-alert-overlay.show .premium-alert {
        transform: scale(1);
    }
    
    .premium-alert-header {
        padding: 24px 24px 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .premium-alert-header h3 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: 600;
    }
    
    .premium-alert-close {
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .premium-alert-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .premium-alert-content {
        padding: 24px;
    }
    
    .premium-alert-content p {
        margin: 0;
        line-height: 1.6;
        font-size: 1rem;
    }
    
    .premium-alert-footer {
        padding: 12px 24px 24px;
        text-align: center;
    }
    
    .premium-alert-btn {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }
    
    .premium-alert-btn:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }
    
    /* Enhanced Notification Styles */
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(15px);
    }
    
    .notification--success {
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
    }
    
    .notification--error {
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
    }
    
    .notification--info {
        background: linear-gradient(135deg, #3b82f6, #2563eb);
        color: white;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-icon {
        font-size: 20px;
        flex-shrink: 0;
    }
    
    .notification-text {
        flex: 1;
        font-weight: 500;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 18px;
        cursor: pointer;
        padding: 4px;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    /* Enhanced Lightbox Styles */
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.4s ease;
        cursor: pointer;
        backdrop-filter: blur(5px);
    }
    
    .lightbox.show {
        opacity: 1;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        cursor: default;
    }
    
    .lightbox-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 12px;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
    }
    
    .lightbox-close {
        position: absolute;
        top: -50px;
        right: 0;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
        backdrop-filter: blur(10px);
    }
    
    .lightbox-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .lightbox-info {
        position: absolute;
        bottom: -50px;
        left: 0;
        right: 0;
        text-align: center;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        padding: 12px;
        border-radius: 8px;
        backdrop-filter: blur(10px);
    }
    
    /* Loading Animation */
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    /* Enhanced Animation Classes */
    .animate-element {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .animate-element.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .floating {
        animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .nav-link.active {
        color: var(--elevate-blue);
        font-weight: 600;
    }
    
    /* Mobile Responsive Adjustments */
    @media (max-width: 768px) {
        .notification {
            right: 10px;
            left: 10px;
            max-width: none;
        }
        
        .premium-alert {
            margin: 20px;
        }
        
        .lightbox-close {
            top: 20px;
            right: 20px;
        }
        
        .lightbox-info {
            bottom: 20px;
            left: 20px;
            right: 20px;
        }
    }
    
    /* Reduced Motion Support */
    @media (prefers-reduced-motion: reduce) {
        .animate-element {
            transition: none;
        }
        
        .floating {
            animation: none;
        }
        
        .ripple {
            animation: none;
        }
        
        body {
            transition: none;
        }
    }
`;

// Add dynamic styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = dynamicStyles;
document.head.appendChild(styleSheet);

// Performance optimization
let ticking = false;

function updateOnScroll() {
    if (!ticking) {
        requestAnimationFrame(function() {
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', updateOnScroll);

// Error handling
window.addEventListener('error', function(e) {
    console.warn('ElevateU: Error handled gracefully:', e.error);
});

console.log('🚀 ElevateU 2025 - Premium Interactive Features Loaded Successfully!');
