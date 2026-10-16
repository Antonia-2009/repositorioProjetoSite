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
    });//fechamento do evento carregar página html//

    //-estrutura do carrosel-//
    const slides=document.querySelectorAll(".carousel-slide");
    const dot= document.querySelectorAll(".dot");
    const prevBtn=document.getElementById("prevBtn");
    const nexBtn=document.getElementById("nextBtn");
    let slideAtual=0;
    let slideIntervalo;

    function showSlide(index)
     {
        slides.forEach((slide)=> slide.classList.remove("active"));
        dot.forEach((dots)=> dots.classList.remove("active"));
        
        slideAtual =(index + slides.length) % slides.length;
       
        slides[slideAtual].classList.add("active");
        dot[slideAtual].classList.add("active");
    }
    function nextSlide(){
        showSlide(slideAtual + 1);
    }
    function prevSlide(){ 
        showSlide(slideAtual - 1);
    }
      function startSlide(){
        slideIntervalo=setInterval(nextSlide,5000);
    }
    function stopsSlide(){
        clearInterval(slideIntervalo);
    }
    nextBtn.addEventListener("click", ()=>{
        nextSlide();
        stopsSlide();
        startSlide();
    });
    prevBtn.addEventListener("click", ()=>{
        prevSlide();
        stopsSlide();
        startSlide();
    });
      startSlide();

    dot.forEach((dot)=>{dot.addEventListener("click",(e)=>
        {const index=parseInt(e.target.getAttribute("data-index"));
            showSlide(index);
            stopsSlide();
            

    })});
    
    
    
    
    
    
    
    });






