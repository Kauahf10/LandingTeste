AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
});

// Menu Mobile
document.querySelector('.mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scroll e Ativação de Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        // Scroll suave
        window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: 'smooth'
        });
        
        // Ativar link clicado
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Atualizar links ativos no scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
    
    // Verificar posição das seções
    const sections = document.querySelectorAll('.content-section, .hero');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});