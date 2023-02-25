
const illusion = document.getElementsByTagName('body')[0];
const darkMode = document.getElementById('dark-change');

darkMode.addEventListener('click' , function(){
    darkMode.classList.toggle('active');    
    illusion.classList.toggle('night');   
})

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));