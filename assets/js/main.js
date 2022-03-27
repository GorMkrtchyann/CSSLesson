let li=document.querySelectorAll(".links");
let sec=document.querySelectorAll("section");

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

let menuStiky = document.querySelector('.Fixedmenu');
let menu = document.querySelector('.menu')

window.onscroll = function(){
    if (window.pageYOffset >= menu.offsetTop) {
        menuStiky.classList.add('sticky')
    }else{
        menuStiky.classList.remove('sticky')
    }
};

// let mobileMenuBut = document.querySelector('#mob-menu-but');
// let mobileMenu = document.querySelector('#mob-menu')
// let mobileCloss = document.querySelector('#menu-closs')

// mobileMenuBut.addEventListener("click", function(){
//     mobileMenu.classList.toggle('but-active')
// });
// mobileCloss.addEventListener("click", function(){
//     mobileMenu.classList.remove('but-active')
// });
// window.addEventListener("scroll", function(){
//     mobileMenu.classList.remove('but-active')
// });

let scrollTop = document.querySelector('.scroll-top');

window.addEventListener("scroll", function(){
    scrollTop.classList.toggle('scroll-active', scrollY > 600)
});

window.addEventListener("scroll", function(){
    if (window.pageYOffset >= document.querySelector('.secondmenu').offsetTop) {
        document.querySelector('.openSecP').classList.add('secMen-active');
    }else{
        document.querySelector('.openSecP').classList.remove('secMen-active');
    }
});

let openLinks = document.querySelectorAll(".openLinks");
let art = document.querySelectorAll(".secondmenu > article");

function activeOpen(){
    let len = art.length;
    while(--len && window.scrollY + 97 < art[len].offsetTop){}
    openLinks.forEach(ltx => ltx.classList.remove("op-active"));
    openLinks[len].classList.add("op-active");
}
activeOpen();
window.addEventListener("scroll", activeOpen);

