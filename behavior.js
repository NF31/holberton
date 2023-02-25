document.addEventListener("DOMContentLoaded", function(event) {

    var thumbnailElement = document.getElementById("smart_thumbnail");
    
thumbnailElement.addEventListener('click', function() {
  /*  alert("Je t'ai vu cliquer!");*/

if (this.className === "small")

this.className = "";

else

this.className = "small";

});

    var change = new Typed('.auto-reverse', {
        strings: ['front-end','back-end','full-stack', 'motivé'],
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        fadeOut:true,
        fadeOutClass:'typed-fade-out',
        fadeOutDelay:500,
    })
    
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', () => {
    
        loader.classList.add('fondu-out');
    
    })
    
    const illusion = document.getElementsByTagName('body')[0];
    const darkMode = document.getElementById('dark-change');
    
    darkMode.addEventListener('click' , function(){
        darkMode.classList.toggle('active');    
        illusion.classList.toggle('night');   
    })
    
    const menuBurger = document.querySelector(".menu-burger");
    const nav = document.querySelector('nav');
    
    menuBurger.addEventListener('click',()=>{
    nav.classList.toggle('mobile-menu')
    }) 
});


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

