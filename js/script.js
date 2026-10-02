document.addEventListener("DOMContentLoaded",()=> {
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu");
    menuResponsivo.addEventListener("click",()=>{
        navMenu.classList.toggle("active");
    })

});//fechamento do evento carregar página html//
