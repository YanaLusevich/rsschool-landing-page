/* Switch theme */

const light = document.querySelector('.sun'),
    dark = document.querySelector('.moon'),
    img_sun = document.querySelector('.theme-switch-sun'),
    img_moon = document.querySelector('.theme-switch-moon'),
    header_logo_img = document.querySelector('.header-logo img'),
    menu_icon_cup = document.querySelector('.menu-icon'),
    enjoy_btn = document.querySelector('.main-block_btn'),
    mobile_img = document.querySelector('.mobile-content_right img'),
    sliderArrows = document.querySelectorAll('.slider-arrow');

light.addEventListener('click', () => {
    document.body.classList.toggle('dark-bg');

    if (document.body.classList.contains('dark-bg')) {
        header_logo_img.src = './images/header/logo_dark.svg';
        menu_icon_cup.src = './images/header/coffee-cup_dark.svg';
        img_moon.src = './images/header/moon-dark.svg';
        enjoy_btn.style.backgroundColor = '#403F3D';
        enjoy_btn.style.color = '#E1D4C9';
        mobile_img.src = './images/mobile_img/mobile-screens-dark.svg';
        sliderArrows.forEach(arrow => {
            arrow.style.backgroundColor = '#292826';
            arrow.style.borderColor = '#C1B6AD';
        });
    } else {
        header_logo_img.src = './images/header/logo.svg';
        menu_icon_cup.src = './images/header/coffee-cup.svg';
        img_moon.src = './images/header/moon.svg';
        enjoy_btn.style.backgroundColor = '#E1D4C9';
        enjoy_btn.style.color = '#403F3D';
        mobile_img.src = './images/mobile_img/mobile-screens.svg';
        slider_arrow.style.backgroundColor = '#E1D4C9';
    }

    console.log('Кнопка нажата')
})

/*Slider*/

document.addEventListener('DOMContentLoaded', () => {

    const btnLeft = document.querySelector('.arrow-left');
    const btnRight = document.querySelector('.arrow-right');

    const images = document.querySelectorAll('.slider img[class^="fav-img"]');
    const titles = document.querySelectorAll('.slider h3[class^="cofee-title"]');
    const descriptions = document.querySelectorAll('.slider p[class^="cofee-discription"]');
    const prices = document.querySelectorAll('.slider p[class^="cofee-price"]');
    const controls = document.querySelectorAll('.control-lines button');

    let currentIndex = 0;


    function showSlide(index) {

        images.forEach(img => img.classList.remove('active'));
        titles.forEach(title => title.classList.remove('active'));
        descriptions.forEach(desc => desc.classList.remove('active'));
        prices.forEach(price => price.classList.remove('active'));
        controls.forEach(ctrl => ctrl.classList.remove('active'));

        if (images[index]) images[index].classList.add('active');
        if (titles[index]) titles[index].classList.add('active');
        if (descriptions[index]) descriptions[index].classList.add('active');
        if (prices[index]) prices[index].classList.add('active');
        if (controls[index]) controls[index].classList.add('active');
    }

    if (btnRight) {
        btnRight.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            showSlide(currentIndex);
        });
    }

    if (btnLeft) {
        btnLeft.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            showSlide(currentIndex);
        });
    }
});