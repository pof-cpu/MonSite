const navSlide = ()=>{
    const burger = document.querySelector('burger');
    const nav = document.querySelector('div.nav-link');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();