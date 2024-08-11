const toggleBtn = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const coverImg = document.querySelector('#cover-img');
const body = document.body;

toggleBtn.addEventListener('click', ()=>{
    const visibility = navMenu.getAttribute('visible');
    if(visibility === 'false'){
        navMenu.setAttribute('visible', true);
        toggleBtn.setAttribute('aria-expanded', true);
        body.style.backgroundColor = 'hsl(var(--clr-dark) / .3)';
    }
    else{
        navMenu.setAttribute('visible', false);
        toggleBtn.setAttribute('aria-expanded', false);
        body.style.backgroundColor = 'hsl(var(--clr-white))';
    }
});

function updateImg(){
    const smallScreen = window.matchMedia('(max-width: 560px)');
    const largeScreen = window.matchMedia('(min-width: 561px');

    if(smallScreen.matches){
        coverImg.src = './assets/img/image-web-3-mobile.jpg';
    }else if(largeScreen.matches){
        coverImg.src = '/assets/img/image-web-3-desktop.jpg';
    }
}
updateImg();
window.addEventListener('resize', updateImg);