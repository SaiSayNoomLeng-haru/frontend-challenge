const toggleBtn = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('#nav-menu');

toggleBtn.addEventListener('click', ()=>{
    const visibility = navMenu.getAttribute('visible');
    if(visibility === 'false'){
        navMenu.setAttribute('visible', true);
        toggleBtn.setAttribute('aria-expanded', true);
    }else{
        navMenu.setAttribute('visible', false);
        toggleBtn.setAttribute('aria-expanded', false)
    }
});