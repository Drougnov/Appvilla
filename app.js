const body = document.body;
const preloader = document.querySelector('.preloader');

window.addEventListener('load',()=>{
    document.body.classList.add('active');
    preloader.style.display = "none";
})


const nav = document.querySelector('nav');
const toggleMenu = document.querySelector('.nav__menu')

toggleMenu.addEventListener('click',()=>{
    nav.classList.toggle('nav__active');
})


const links = document.querySelectorAll('.nav__links li a');
const sections = document.querySelectorAll('.nav-section');

window.addEventListener('scroll', ()=>{
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop - 100){
            current = section.getAttribute('id');
        }
    })
    links.forEach(link =>{
        link.classList.remove('active');
        document.querySelector(`.${current}-link`).classList.add('active');
    })
})




function handleAccordion(){
    let accordionOpened = document.querySelectorAll('details[open]')
    for(let item of accordionOpened){
        if(this !=item){
            item.removeAttribute("open");
        }
    }
}

const accordions = document.querySelectorAll('details');
accordions.forEach(accordion=>{
    accordion.addEventListener('click',handleAccordion);
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
});


const swiperOne = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

window.addEventListener('scroll', ()=>{
    const currentScroll = window.pageYOffset;

    if(currentScroll > 0){
        body.classList.add('scroll-down');
    }else{
        body.classList.remove('scroll-down');
    }

    const goTop = document.querySelector('.go-top');
    if(currentScroll >= 620){
        goTop.style.display = "flex";
    }else{
        goTop.style.display = "none";
    }
})


const fadeFromLeftElements = document.querySelectorAll('.fadeFromLeft');
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        entry.isIntersecting && entry.target.classList.add('ffl-active');
    })
})
fadeFromLeftElements.forEach(el => observer.observe(el));


const fadeFromRightElements = document.querySelectorAll('.fadeFromRight');
const observerTwo = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.isIntersecting && entry.target.classList.add('ffr-active');
    })
})
fadeFromRightElements.forEach(el => observerTwo.observe(el));


const fadeFromBottomElements = document.querySelectorAll('.fadeFromBottom');
const observerThree = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.isIntersecting && entry.target.classList.add('ffb-active');
    })
})
fadeFromBottomElements.forEach(el => observerThree.observe(el));


const fadeFromTopElements = document.querySelectorAll('.fadeFromTop');
const observerFour = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.isIntersecting && entry.target.classList.add('fft-active');
    })
})
fadeFromTopElements.forEach(el => observerFour.observe(el));