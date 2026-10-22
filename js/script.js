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
    
    //-Válidção campus formulário-//
    const contatoForm=document.getElementById("contatoForm");
    const email= document.getElementById("email");
    const nome =document.getElementById("nome");
    const mensagem=document.getElementById("mensagem");

    contatoForm.addEventListener("submit",(event)=>{event.preventDefault();});
    
    function showToast(mensagemCadastro){
        const toast = document.getElementById("toast");
        const toastMensagem=document.getElementById("toastMensagem");
        toast.classList.add("show");

        setTimeout(() =>{toast.classList.remove("show");},3000);
    }
    //-Limpar erro-//

    clearErro();
    let isValid= true;
    
    //-validação do campo nome(minimo 3 caracteres)// 
    if(nome.value.trim().length < 3)
        {
           showErro(nome,"O nome deve ter no mínimo três caracteres");
           isValid=false;
        }    
    //--Verificar se o campo e-mail é válido -//
    if(isEmailValid(email.value.trim()))
        {
            showErro(email,"insira um e-mail válido");
            isValid=false;
        };
        //-Validação do campo de mensagem(Mínimo 10 caracteres)-//
        if(mensagem.value.trim().length < 10)
            {
              showErro(mensagem,"Escreva uma mensagem com ATÉ 10 caracteres");
              isValid=false;
            };
        if(isValid)
        {
        
        ClearErro();
          alert("Mensagem enviada com sucesso");
          contatoForm,reset();
        }
         //--validação do campo "email"-//
         
         function isEmailValid(email)
         {
            const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
         }
         //-remover a borda vermelha nos inputs-//
         [nome,email,mensagem].forEach((input)=>{input.addEventListener("input",()=>{clearFieldError(input);});});
         
         function showErro(inputElement,mensagem)
         {
           const formGroup = inputElement.parentElement;
           clearFieldError(inputElement);
          inputElement.classList.add("input-error");
          const erroMensagem=document.createElement("small");
          erroMensagem.className="error-text";
          erroMensagem.innerText=mensagem;

          formGroup.appendChild(erroMensagem);
         }
         //--remove individualmente os erros-//
         function clearFieldError(inputElement){
            const formGroup = inputElement.parentElement;
            inputElement.classList.remove("input-error");
            const removerErro=formGroup.querySelector(".error-text");
            if(removerErro){removerErro.remove(); }
         }
         //-Remover o erro de todos os campos-//
         function clearErro(){
            document.querySelectorAll(".erro-text").forEach((el)=>el.remove());
            document.querySelectorAll(".input-error").forEach((el)=>el.classList.remove("input-error"));
         }




































});






