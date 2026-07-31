// Dom Content Loaded ensure korbe jeno HTML full load hobar por JS kaj kore
document.addEventListener("DOMContentLoaded", () => {

    // --- ১. SMOOTH SCROLLING EFFECT ---
    // Navbar e click korle jeno smooth scroll hoye sei section e jay
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Default instant jump bondho korbe
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- ২. ACTIVE LINK ON SCROLL ---
    // User scroll kore jekhane jabe, navbar automatic sei button active (highlight) korbe
    const sections = document.querySelectorAll('section, .about-section, .skills-section, .contact-section');

    window.addEventListener('scroll', () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Screen position tracking (Navbar height bad dewar jonno 100px buffer)
            if (window.scrollY >= (sectionTop - 100)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active'); // active class directly top active standard follow kore
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.style.color = "#007BFF"; // Active link target blue hobe
            } else {
                link.style.color = "#555555"; // Normal link color
            }
        });
    });

    // --- ৩. CONTACT FORM VALIDATION & SUBMIT ---
    // Contact form blank submit hole alert dibe, full hole confirmation message dekhabe
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Real reload layout block korbe submit hobar ag porjonto

            const nameInput = contactForm.querySelector('input[name="name"]').value.trim();
            const emailInput = contactForm.querySelector('input[name="email"]').value.trim();
            const subjectInput = contactForm.querySelector('input[name="subject"]').value.trim();
            const messageInput = contactForm.querySelector('textarea[name="message"]').value.trim();

            // Simple user verification
            if (nameInput === "" || emailInput === "" || messageInput === "") {
                alert("Anugroho kore dorkari ghorgulo (Name, Email, Message) puron korun!");
                return;
            }

            // Dummy custom success simulation message
            alert(`Dhonnobad, ${nameInput}! Apnar barta-ti sfolbhabe pathano hoyeche।`);
            contactForm.reset(); // Form clear kore dibe submit shesh hole
        });
    }
});