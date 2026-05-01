document.addEventListener('DOMContentLoaded', () => {
    const cursorBlob = document.querySelector('.cursor-blob');

    renderProjectGrid();

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

function renderProjectGrid() {
    const projectsGrid = document.getElementById('projects-grid');
    const projects = window.getAllProjects ? window.getAllProjects() : window.projectData;

    if (!projectsGrid || !projects) {
        return;
    }

    projectsGrid.innerHTML = Object.entries(projects).map(([projectId, project]) => {
        const statusColor = project.status === 'Completed'
            ? 'text-green-600'
            : 'text-yellow-600';
        const skillBadges = (project.skills || project.technologies.slice(0, 5)).map(skill => `
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">${skill}</span>
        `).join('');
        const demoLink = project.demo || '#';
        const codeLink = project.github || '#';
        const demoTarget = demoLink.startsWith('http') ? '_blank' : '_self';
        const codeTarget = codeLink.startsWith('http') ? '_blank' : '_self';

        return `
            <div class="bg-white rounded-lg overflow-hidden shadow-lg project-card h-full flex flex-col">
                <img src="${project.image}" alt="${project.title}" class="w-full h-50 object-cover" loading="lazy" decoding="async">
                <div class="p-6 flex-1 flex flex-col">
                    <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <p class="text-sm font-semibold mb-4">
                        <span class="text-gray-600">Status:</span>
                        <span class="${statusColor}">${project.status}</span>
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${skillBadges}
                    </div>
                    <div class="mt-auto pt-2 flex justify-between items-center gap-4">
                        <div class="flex space-x-2">
                            <a href="${demoLink}" class="text-indigo-600 hover:underline text-sm" target="${demoTarget}">Demo</a>
                            <a href="${codeLink}" class="text-indigo-600 hover:underline text-sm" target="${codeTarget}">Code</a>
                        </div>
                        <a href="project-details.html?project=${projectId}" class="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300 text-sm">View Details</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

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
            link.classList.remove('text-indigo-600');
            if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('text-indigo-600');
            }
        });
    });
}

    function setupSiteSearch() {
        const desktopInput = document.getElementById('site-search-input');
        const desktopButton = document.getElementById('site-search-button');
        const mobileInput = document.getElementById('site-search-input-mobile');
        const mobileButton = document.getElementById('site-search-button-mobile');

        const performSearch = (rawValue) => {
            const query = (rawValue || '').trim().toLowerCase();
            if (!query) return;

            const sectionMatch = Array.from(document.querySelectorAll('section')).find(section =>
                (section.innerText || '').toLowerCase().includes(query)
            );

            const projectMatch = Array.from(document.querySelectorAll('#projects-grid .project-card, #related-projects .project-card')).find(card =>
                (card.innerText || '').toLowerCase().includes(query)
            );

            if (projectMatch) {
                projectMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }

            if (sectionMatch) {
            sectionMatch.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

            alert('No matching content found.');
        };

        const bindSearch = (inputEl, buttonEl) => {
            if (!inputEl || !buttonEl) return;
            buttonEl.addEventListener('click', () => performSearch(inputEl.value));
            inputEl.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    performSearch(inputEl.value);
                }
            });
        };

        bindSearch(desktopInput, desktopButton);
        bindSearch(mobileInput, mobileButton);
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

    setupSiteSearch();
});