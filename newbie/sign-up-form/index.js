'use strict';
//form
document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('#form input');
    let isValid = true;
    
    inputs.forEach(input => {
        const error = input.nextElementSibling;
        const inputValue = input.value;
        
        // Validate input values
        if(!inputValue){
            error.style.display = 'block';
            isValid = false;
        }

        // Validate Username
        if(input.id === 'username'){
            const specialRegEx = /[^a-zA-z0-9\s]/;
            const spaceRegEx = /\s/;
            
            if(specialRegEx.test(inputValue)){
                error.style.display = 'block';
                error.querySelector('p').textContent = 'username cannot contain any special characters';
                isValid = false;
            }else if(spaceRegEx.test(inputValue)){
                error.style.display = 'block';
                error.querySelector('p').textContent = 'username cannot contain any space';
                isValid = false;
            }
        }

        // Validate Email
        if(input.id === 'email'){
            const emailRegEx = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,}$/;

            if(!emailRegEx.test(inputValue)){
                error.style.display = 'block';
                input.value = 'example123@mail.com';
                input.style.color = 'hsl(var(--clr-red))';
                isValid = false;
            }
        }

        // Validate password
        if(input.id === 'password'){
            const upperRegEx = /[A-Z]/;
            const numberRegEx = /[0-9]/;
            const minLength = 8;

            if(!upperRegEx.test(inputValue)){
                error.style.display = 'block';
                error.querySelector('p').textContent = 'Password must contain at least one uppercase';
                isValid = false;
            }else if(!numberRegEx.test(inputValue)){
                error.style.display = 'block';
                error.querySelector('p').textContent = 'Password must contain at lease one number';
                isValid = false;
            }else if(inputValue.length < minLength){
                error.style.display = 'block';
                error.querySelector('p').textContent = 'username must have at least 8 characters';
                isValid = false;
            }
        }

        if(isValid){
            document.querySelector('.form-container').submit();
        }

        input.value = '';
    })
})