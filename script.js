document.addEventListener("DOMContentLoaded", () => {
    
    // Select nav links and all main sections
    const navLinks = document.querySelectorAll('.nav__pill a[href^="#"]');
    const sections = document.querySelectorAll('header, section, footer');

    /**
     * Scroll Spy: Highlights the navigation icon based on 
     * which section is currently visible in the viewport.
     */
    function highlightActiveLink() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Offset logic: Highlight when 1/3rd of the section is visible
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Loop through links and add/remove 'active' class
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Check if link href matches current section ID
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    }

    // Run on scroll
    window.addEventListener('scroll', highlightActiveLink);
    
    // Run once on load in case we start down the page
    highlightActiveLink();
});