'use strict';
// validate email
document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    const input = document.querySelector('#email');
    const inputValue = input.value;
    const error = document.querySelector('#error');

    const emailRegEx = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,}$/;

    if(!emailRegEx.test(inputValue)){
        error.style.display = 'block';
        isValid = false;
        setTimeout(() => {
            error.style.display = 'none'
        },1000);
    }else{
        isValid = true;
    }

    if(isValid){
        document.querySelector('#form').submit();
        localStorage.setItem('input email', inputValue);

        setTimeout(()=>{
            localStorage.removeItem('input email')
        }, 1000);
    }

    input.value = '';
});

// img for cover
const img = document.querySelector('#hero-img');

function updateImg(){
    const smallScreen = window.matchMedia('(max-width: 34.9em)');
    const largeScreen = window.matchMedia('(min-width: 35em)');

    if(smallScreen.matches){
        img.src = "./assets/img/hero-mobile.jpg";
    }else if(largeScreen.matches){
        img.src = "./assets/img/hero-desktop.jpg";
    }
}
updateImg();
window.addEventListener('resize', updateImg);