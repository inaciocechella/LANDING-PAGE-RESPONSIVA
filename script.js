/* ====================
   SCRIPT MENU MOBILE
   ==================== */
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });


    /* ====================
       SCRIPT ABAS DE SERVIÇOS
       ==================== */
    const tabLinks = document.querySelectorAll('.service-tab-link'); 
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');

            // Remove 'active' de todos os links (cards) e painéis
            tabLinks.forEach(item => item.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Adiciona 'active' ao link clicado e ao painel correspondente
            link.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });


    /* ====================
       SCRIPT CARROSSEL PORTFÓLIO
       ==================== */
    new Swiper('.portfolio-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        loop: true,
        pagination: {
            el: '.portfolio-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.portfolio-swiper .swiper-button-next',
            prevEl: '.portfolio-swiper .swiper-button-prev',
        },
    });


    /* ====================
       SCRIPT CARROSSEL MATERIAIS
       ==================== */
    new Swiper('.material-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        loop: true,
        pagination: {
            el: '.material-swiper .swiper-pagination-material', 
            clickable: true,
        },
        navigation: { // ADICIONADO para garantir as setas
            nextEl: '.material-swiper .swiper-button-next',
            prevEl: '.material-swiper .swiper-button-prev',
        },
    });

    
    /* ====================
       SCRIPT CARROSSEL DETALHES DE SERVIÇO
       ==================== */
    new Swiper('.service-detail-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        loop: true, 
        pagination: {
            el: '.service-detail-swiper .swiper-pagination-service', 
            clickable: true,
        },
    });

});
