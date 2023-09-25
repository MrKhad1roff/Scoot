const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion__content');

titles.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        contents.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });

        titles.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))

document.querySelector('[data-tab="tab-1"]').classList.add('active');
document.querySelector('#tab-1').classList.add('active');
document.querySelector('#tab-1').style.maxHeight = document.querySelector('#tab-1').scrollHeight + 'px';




const titles1 = document.querySelectorAll('.accordion__title1');
const contents1 = document.querySelectorAll('.accordion__content1');

titles1.forEach(item => item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {
        activeContent.classList.remove('active');
        item.classList.remove('active');
        activeContent.style.maxHeight = 0;
    } else {
        contents1.forEach(element => {
            element.classList.remove('active');
            element.style.maxHeight = 0;
        });

        titles1.forEach(element => element.classList.remove('active'));

        item.classList.add('active');
        activeContent.classList.add('active');
        activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
}))

document.querySelector('[data-tab="tab-1_"]').classList.add('active');
document.querySelector('#tab-1_').classList.add('active');
document.querySelector('#tab-1_').style.maxHeight = document.querySelector('#tab-1_').scrollHeight + 'px';


const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__list');
const navLinks = document.querySelectorAll('.nav__list li');

//Toggle nav

burger.addEventListener('click', function () {
    setTimeout(() => {
        nav.style.opacity = "1"
    }, 200);

    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        }else{
            link.style.animation = `navLink 0.5s ease forwards ${index / 7 + 0.35}`
        }
    });


    burger.classList.toggle('toggle');
});


