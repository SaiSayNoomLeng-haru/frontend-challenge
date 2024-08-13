(()=>{
    'use strict'
    const body = document.body;
    function attachEventListeners(){
        const submitbtn = document.querySelector('.submit-btn');
        const email = document.querySelector('#email');
        let emailText;

        submitbtn.addEventListener('click', (e)=>{
            e.preventDefault();
            emailText = email.value;
            if(emailText){
                localStorage.setItem('emailText', emailText)
                toSuccess();
            }
            else{
                console.log('error');
            }
        });
    }
    
    
    async function loadContent(url, callback){
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('network problem');
            }
            const result = await response.text();
            body.innerHTML = result;
            callback();
        }
        catch(err){
            console.log(err);
        }
    }

    async function toSuccess(){
        loadContent('success.html', ()=>{
            const setEmail = localStorage.getItem('emailText');
            if(setEmail){
                document.querySelector('#response-email').innerHTML = setEmail;
            }
        
            const disBtn = document.querySelector('.dismiss-btn');
            disBtn.addEventListener('click', ()=>{
                toIndex();
            })
        });
    
    }
    
    async function toIndex(){
        loadContent('index.html', ()=>{
            localStorage.removeItem('emailText');
            attachEventListeners();
        });
        
    }
    attachEventListeners();
})();
