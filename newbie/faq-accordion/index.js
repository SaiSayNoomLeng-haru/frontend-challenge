const toggleBtns = document.querySelectorAll('.toggle-btn');
const dropdowns = document.querySelectorAll('.dropdown-container');

toggleBtns.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        const visibility = btn.getAttribute('aria-expanded');

        const dropdown = dropdowns[index];
        if(visibility === 'false'){
            btn.setAttribute('aria-expanded', true)
            dropdown.setAttribute('visible', true);
        }else{
            btn.setAttribute('aria-expanded', false)
            dropdown.setAttribute('visible', false);
        }
    });
});


