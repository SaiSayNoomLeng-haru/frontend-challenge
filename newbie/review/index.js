/*
const btnGroup = document.querySelectorAll('.btn-group .btn');
const submit = document.querySelector('.submit-btn');
const errMessage = document.querySelector('#error-message');

let star;

btnGroup.forEach(btn => {
    btn.addEventListener('click', ()=>{
        star = btn.getAttribute('star')
    })
});

submit.addEventListener('click', ()=>{
    if(star){
        localStorage.setItem('selectedStar', star);
        feedback();
    }else{
        errMessage.style.display = 'block';
        errMessage.innerHTML = `Please select to review!`
        setTimeout(()=>{
            errMessage.style.display = 'none';
        }, 500);
    }
});

async function feedback(){
    try{
        const response = await fetch(`feedback.html`);
        if(!response){
            throw new Error('network error')
        }
        const result = await response.text();
        document.querySelector('#main-review').innerHTML = result;
     
        const storedStar = localStorage.getItem('selectedStar');
        if(storedStar){
            document.getElementById('result-star').innerHTML = storedStar;
        }

        const backBtn = document.querySelector('.back-btn');
        backBtn.addEventListener('click', ()=>{
            toIndex();
        });
    }
    catch(error){
        console.log(error);
    }
}

async function toIndex(){
    try{
        const response = await fetch('index.html');
        if(!response){
            throw new Error('network error');
        }
        const result = await response.text();
        document.querySelector('#main-review').innerHTML = result;
        localStorage.removeItem('selectedStar');

        const btnGroup = document.querySelectorAll('.btn-group .btn');
        btnGroup.forEach(btn => {
            btn.addEventListener('click', ()=>{
                star = btn.getAttribute('star')
            })
        });

        const submit = document.querySelector('.submit-btn');
        const errMessage = document.querySelector('#error-message');
        submit.addEventListener('click', ()=>{
            if(star){
                localStorage.setItem('selectedStar', star);
                feedback();
            }else{
                errMessage.style.display = 'block';
                errMessage.innerHTML = `Please select to review!`
                setTimeout(()=>{
                    errMessage.style.display = 'none';
                }, 500);
            }
        });
    }
    catch(error){
        console.log(error);
    }
}
*/

(()=>{
    'use strict';
    function attachEventListeners(){
        const btnGroup = document.querySelectorAll('.btn-group .btn');
        const submitBtn = document.querySelector('.submit-btn');
        let star;
        
        btnGroup.forEach(btn => {
            btn.addEventListener('click', ()=>{
                star = btn.getAttribute('star');
            });
        });

        submitBtn.addEventListener('click', ()=>{
            if(star){
                localStorage.setItem('selectedStar', star);
                toFeedback();
            }
            else{
                showErrorMessage('Please select stars to review us');
            }
        });
    }

    function showErrorMessage(message){
        const errorMsg = document.querySelector('#error-message');
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = message;
        setTimeout(()=>{
            errorMsg.style.display = 'none';
        }, 1000);
    }

    async function loadContent(url, callback){
        try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('network error');
                }
                const result = await response.text();
                document.querySelector('#main-review').innerHTML = result;
                callback();
        }
        catch(error){
                console.log(error);
        }
    }

        async function toFeedback(){
            loadContent('feedback.html', ()=>{
              const storedStar = localStorage.getItem('selectedStar');
              
              if(storedStar){
                document.querySelector('#result-star').innerHTML = storedStar;
              }

              const backBtn = document.querySelector('.back-btn');
              backBtn.addEventListener('click', ()=>{
                toIndex();
              })
            });
        }

        async function toIndex(){
            loadContent('index.html', ()=>{
                localStorage.removeItem('selectedStar');
                attachEventListeners();
            });
        }

    
    attachEventListeners();
})();

