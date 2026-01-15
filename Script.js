document.addEventListener('DOMContentLoaded', () => {
    const cursorBlob = document.querySelector('.cursor-blob');

    if (cursorBlob) {
        document.addEventListener('mousemove', (e) => {
            cursorBlob.style.left = e.clientX + 'px';
            cursorBlob.style.top = e.clientY + 'px';
        });
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section h2').forEach(heading => {
        gsap.from(heading, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: heading,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    gsap.utils.toArray('.skill-icon').forEach((skill, i) => {
        gsap.from(skill, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: '#skills',
                start: "top 70%",
                toggleActions: "play none none none"
            }
        });
    });

    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: '#projects',
                start: "top 60%",
                toggleActions: "play none none none"
            }
        });
    });

    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('opacity-100');
                backToTop.classList.remove('opacity-0');
            } else {
                backToTop.classList.add('opacity-0');
                backToTop.classList.remove('opacity-100');
            }
        });
    }
});

function animateSections() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

function setupContactForm() {
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const button = form.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;

            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            try {
                const formData = new FormData(form);
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    button.innerHTML = '<i class="fas fa-check"></i> Sent!';
                    form.reset();
                    setTimeout(() => {
                        button.disabled = false;
                        button.innerHTML = originalText;
                    }, 3000);
                    alert('Message sent successfully!');
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                button.innerHTML = originalText;
                button.disabled = false;
                alert('Error sending message. Please try again.');
                console.error(error);
            }
        });
    }
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });

                const isOpen = document.querySelector('[x-data]').__x.$data.isOpen;
                if (isOpen) {
                    document.querySelector('[x-data]').__x.$data.isOpen = false;
                }
            }
        });
    });
}

function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-indigo-600', 'dark:text-indigo-400');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-indigo-600', 'dark:text-indigo-400');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animateSections();
    setupContactForm();
    setupSmoothScrolling();
    highlightActiveNavLink();

    const text = document.querySelector('#home h1');
    if (text) {
        const textContent = text.innerHTML;
        text.innerHTML = '';

        let i = 0;
        const typeWriter = () => {
            if (i < textContent.length) {
                text.innerHTML += textContent.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };

        setTimeout(typeWriter, 500);
    }

    const darkModeData = document.querySelector('[x-data]').__x.$data;
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';

    if (savedDarkMode) {
        darkModeData.darkMode = true;
        document.documentElement.classList.add('dark');
    }

    const darkModeToggle = document.querySelector('[x-data] button');
    darkModeToggle.addEventListener('click', () => {
        localStorage.setItem('darkMode', darkModeData.darkMode);
    });
});