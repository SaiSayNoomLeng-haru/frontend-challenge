const toggleBtn = document.querySelector('.mobile-toggle-btn');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links');
const body = document.body;

//toggle button
toggleBtn.addEventListener('click', ()=>{
    const visibility = navMenu.getAttribute('visible');

    if(visibility === 'false'){
        navMenu.setAttribute('visible', true);
        toggleBtn.setAttribute('aria-expanded', true);
        body.style.backgroundColor = 'rgb(var(--clr-dark) / .2)';
    }
    else if(visibility === 'true'){
        navMenu.setAttribute('visible', false);
        toggleBtn.setAttribute('aria-expanded', false);
        body.style.backgroundColor = 'rgb(var(--clr-white))';
    }
}); 

// nav links close
navLinks.forEach(navLink => {
    navLink.addEventListener('click', ()=>{
        navMenu.setAttribute('visible', false);
        toggleBtn.setAttribute('aria-expanded', false);
        body.style.backgroundColor = 'rgb(var(--clr-white))';
    });
});



