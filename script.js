
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, 
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('a.nav-link');
    
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; 
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href").substring(1) === current) {
                item.classList.add("active");
            }
        });
    });

    const Name = document.querySelector("header h1");
      Name.addEventListener("mouseenter", () => {
        Name.style.transform = "rotate(5deg) scale(1.2)";
    });
       Name.addEventListener("mouseleave", () => {
        Name.style.transform = "rotate(0) scale(1)";
    });

    // Submit Confirmation for Contact Form
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your message has been sent! Thank you for contacting me.");
        contactForm.reset();
    });
});
