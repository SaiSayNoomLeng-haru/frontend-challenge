const img = document.querySelector('#product-img');

function updateImage(){
    const smallScreen = window.matchMedia('(max-width: 560px)');
    const largeScreen = window.matchMedia('(min-width: 561px)');
    
    if(smallScreen.matches){
        img.src = "/assets/img/image-product-mobile.jpg";
    }else if(largeScreen.matches){
        img.src = "/assets/img/image-product-desktop.jpg"
    }
}
updateImage();
window.addEventListener('resize', updateImage);

