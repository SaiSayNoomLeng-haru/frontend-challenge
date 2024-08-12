const toggleBtn = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const body = document.body;
const img = document.querySelector('#cover-img');

toggleBtn.addEventListener('click', ()=>{
    const visibility = navMenu.getAttribute('visible');

    if(visibility === 'false'){
        navMenu.setAttribute('visible', true);
        toggleBtn.setAttribute('aria-expanded', true);
        body.style.backgroundColor = 'hsl(var(--clr-dark) / .2)'
    }
    else if (visibility === 'true'){
        navMenu.setAttribute('visible', false);
        toggleBtn.setAttribute('aria-expanded', false);
        body.style.backgroundColor = 'hsl(var(--clr-white)) '
    }
}); 

function updateImg(){
    const smallScreen = window.matchMedia('(max-width: 35em)');
    const largeScreen = window.matchMedia('(min-width: 35.1em)');

    if(smallScreen.matches){
        img.src = "./assets/img/image-web-3-mobile.jpg";
    }else if(largeScreen.matches){
        img.src = "./assets/img/image-web-3-desktop.jpg"
    }
}
updateImg();

window.addEventListener('resize', updateImg)