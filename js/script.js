const expand = document.querySelector('.expand');
const ayu = document.querySelectorAll('.ayu-title');
const quoteFadeA = document.querySelectorAll('.quote_a_fade');


window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.header').classList.add('visible');
    setTimeout(() => {
        expand.classList.toggle('expanded');
    }, 2000);
});

window.addEventListener('scroll', () => {
    expand.classList.toggle('expanded', window.scrollY < 200);
    expand.classList.toggle('not-expanded', window.scrollY > 200);
    ayu.forEach(element => {
        element.classList.toggle('visible', window.scrollY > 440);
        element.classList.toggle('not-visible', window.scrollY < 440);
    });
    quoteFadeA.forEach(fadeA => {
        fadeA.classList.toggle('visible', window.scrollY > 880);
        fadeA.classList.toggle('not-visible', window.scrollY < 880);
    })
    
});

expand.addEventListener('click', () => {
    expand.classList.toggle('not-expand');
});