document.addEventListener("DOMContentLoaded", () => {
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
    //-estrutura do carrosel-//
    const slides=document.querySelectorAll(".carousel-slide");
    const dot= document.querySelectorAll(".dot");
    const prevBtn=document.getElementById("prevBtn");
    const nexBtn=document.getElementById("nextBtn");
    let slideAtual=0;
    let slideIntervalo;

    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        dot.forEach((dot)=> dot.classList.remove("active"));
        
        slideAtual = (index + slides.length) % slides.length;
       
        slide[slideAtual].classList.add("active");
        dots[slideAtual].classList.add("active");
    }
});


//fechamento do evento carregar página html//


