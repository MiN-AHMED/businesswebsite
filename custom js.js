let menuBtn = document.querySelector('.menu-btn');
let navBar = document.querySelector('.navigation');
let header = document.querySelector('.header');
let leaderSection = document.querySelector('.team-leader');

let homeActive = document.querySelector('.nav-home');
let aboutActive = document.querySelector('.nav-about');
let servicesActive = document.querySelector('.nav-services');
let protfolioActive = document.querySelector('.nav-protfolio');
let testimonialsActive = document.querySelector('.nav-testimonials');
let contactActive = document.querySelector('.nav-contact');

menuBtn.addEventListener('click', function(){
    navBar.classList.toggle('active');
})




window.addEventListener('scroll',function(){

    let scrolled = this.window.scrollY;

    console.log(scrolled);
    
    navBar.classList.remove('active');

    if(this.scrollY>0){
        header.setAttribute('style', 'border-bottom: 3px solid #2b3f47; background:#fff;');
        navBar.classList.add('up');
    }
    else{
        header.setAttribute('style', 'border-bottom:none; background:none;');
        navBar.classList.remove('up');

    }
})

window.addEventListener('load',function(){

    let scrolled = this.window.scrollY;

    console.log(scrolled);
    
    navBar.classList.remove('active');

    if(this.scrollY>0){
        header.setAttribute('style', 'border-bottom: 3px solid #2b3f47; background:#fff;');
        navBar.classList.add('up');
    }
    else{
        header.setAttribute('style', 'border-bottom:none; background:none;');
        navBar.classList.remove('up');

    }
})

window.addEventListener('scroll',function(){

    navBar.classList.remove('active');

    if(this.scrollY >= 0 && this.scrollY<900){
        homeActive.classList.add('active');

        testimonialsActive.classList.remove('active');
        protfolioActive.classList.remove('active');
        contactActive.classList.remove('active');
        aboutActive.classList.remove('active');
        servicesActive.classList.remove('active');
    }else if(this.scrollY> 901 && this.scrollY<2090){
        testimonialsActive.classList.add('active');

        homeActive.classList.remove('active');
        protfolioActive.classList.remove('active');
        contactActive.classList.remove('active');
        aboutActive.classList.remove('active');
        servicesActive.classList.remove('active');
    
    }else if(this.scrollY> 2880 && this.scrollY<3800){
        protfolioActive.classList.add('active');

        homeActive.classList.remove('active');
        testimonialsActive.classList.remove('active');
        contactActive.classList.remove('active');
        aboutActive.classList.remove('active');
        servicesActive.classList.remove('active');
    
    }else if(this.scrollY> 3801 && this.scrollY<4820){
        contactActive.classList.add('active');

        homeActive.classList.remove('active');
        testimonialsActive.classList.remove('active');
        protfolioActive.classList.remove('active');
        aboutActive.classList.remove('active');
        servicesActive.classList.remove('active');
    
    }else if(this.scrollY> 4821 && this.scrollY<5460){
        aboutActive.classList.add('active');

        homeActive.classList.remove('active');
        testimonialsActive.classList.remove('active');
        protfolioActive.classList.remove('active');
        contactActive.classList.remove('active');
        servicesActive.classList.remove('active');
    
    }else if(this.scrollY> 5561 && this.scrollY<6390){
        servicesActive.classList.add('active');

        homeActive.classList.remove('active');
        testimonialsActive.classList.remove('active');
        protfolioActive.classList.remove('active');
        contactActive.classList.remove('active');
        aboutActive.classList.remove('active');
    
    }else{
        homeActive.classList.remove('active');
        testimonialsActive.classList.remove('active');
        protfolioActive.classList.remove('active');
        contactActive.classList.remove('active');
        aboutActive.classList.remove('active');
        servicesActive.classList.remove('active');
    }
})


function CountStart(){

    let countersBar = document.querySelectorAll('.counter');

    countersBar.forEach(function (counter){
    
        counter.innerHTML=0;
    
        function UpdateCount(){
            
            let count = +counter.getAttribute('data-target');
            let innerCount = +counter.innerHTML;
            let increment = count/300;
    
            if(innerCount < count){
                counter.innerHTML= Math.ceil(innerCount + increment);
                setInterval(UpdateCount, 100);
            }
            else{
                counter.innerHTML= count;
            }
        }
        UpdateCount()
    });    


}

window.addEventListener('scroll',function(){

    if(this.scrollY==2400 ){     

        CountStart();

    }

});

window.addEventListener('scroll',function(){

    var reveals = this.document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){

       var windowheight = this.window.innerHeight;
       var revealtop = reveals[i].getBoundingClientRect().top;
       var revealpoint = 150;

       if(revealtop < windowheight - revealpoint){

        reveals[i].classList.add('active');

       }else{

        reveals[i].classList.remove('active');

       }

    }

});

var swiper = new Swiper(".gallery-swiper", {
    loop:true,
    grabCursor:true,
    slidesPerView: 1,
    
    
    navigation:{
        nextEl: ".right",
        prevEl: ".left",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
     
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    },

});