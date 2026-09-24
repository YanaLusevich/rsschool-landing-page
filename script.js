/* Switch theme */

// Определяем базовый путь к папке images
const isMenuPage = window.location.pathname.includes('page_menu');
const basePath = isMenuPage ? '../images' : './images';

// Загружаем сохраненную тему из localStorage при открытии страницы
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-bg');
    document.documentElement.classList.add('dark-bg');
}

const light = document.querySelector('.sun'),
    dark = document.querySelector('.moon'),
    img_sun = document.querySelector('.theme-switch-sun'),
    img_moon = document.querySelector('.theme-switch-moon'),
    header_logo_img = document.querySelector('.header-logo img'),
    menu_icon_cup = document.querySelector('.menu-icon'),
    enjoy_btn = document.querySelector('.main-block_btn'),
    mobile_img = document.querySelector('.mobile-content_right img'),
    sliderArrows = document.querySelectorAll('.slider-arrow'),
    twitter = document.querySelector('.twitter'),
    instagram = document.querySelector('.instagram'),
    facebook = document.querySelector('.facebook'),
    appStore = document.querySelector('.app-store'),
    googlePlay = document.querySelector('.google-play'),
    btnCoffee = document.querySelector('.btn-coffee'),
    btnTea = document.querySelector('.btn-tea'),
    btnDessert = document.querySelector('.btn-dessert');

// Функция для применения темы
function applyTheme(isDark) {
    if (isDark) {
        // Основные изображения
        if (header_logo_img) header_logo_img.src = `${basePath}/header/logo_dark.svg`;
        if (menu_icon_cup) menu_icon_cup.src = `${basePath}/header/coffee-cup_dark.svg`;
        if (img_moon) img_moon.src = `${basePath}/header/moon-dark.svg`;
        if (enjoy_btn) {
            enjoy_btn.style.backgroundColor = '#403F3D';
            enjoy_btn.style.color = '#E1D4C9';
        }
        if (mobile_img) mobile_img.src = `${basePath}/mobile_img/mobile-screens-dark.svg`;
        
        // Стрелки слайдера
        sliderArrows.forEach(arrow => {
            arrow.style.backgroundColor = '#292826';
            arrow.style.borderColor = '#C1B6AD';
        });

        // Кнопки загрузки (для темной темы используем светлые версии)
        if (appStore) appStore.style.backgroundImage = `url(${basePath}/mobile_img/apple-light.svg)`;
        if (googlePlay) googlePlay.style.backgroundImage = `url(${basePath}/mobile_img/google_play-light.svg)`;
    } else {
        // Основные изображения
        if (header_logo_img) header_logo_img.src = `${basePath}/header/logo.svg`;
        if (menu_icon_cup) menu_icon_cup.src = `${basePath}/header/coffee-cup.svg`;
        if (img_moon) img_moon.src = `${basePath}/header/moon.svg`;
        if (enjoy_btn) {
            enjoy_btn.style.backgroundColor = '#E1D4C9';
            enjoy_btn.style.color = '#403F3D';
        }
        if (mobile_img) mobile_img.src = `${basePath}/mobile_img/mobile-screens.svg`;
        
        // Стрелки слайдера
        sliderArrows.forEach(arrow => {
            arrow.style.backgroundColor = '#E1D4C9';
            arrow.style.borderColor = '#403F3D';
        });

        // Кнопки загрузки на светлую тему
        if (appStore) appStore.style.backgroundImage = `url(${basePath}/mobile_img/apple.svg)`;
        if (googlePlay) googlePlay.style.backgroundImage = `url(${basePath}/mobile_img/google_play.svg)`;
    }
}

// Применяем сохраненную тему при загрузке
applyTheme(savedTheme === 'dark');

function setTheme(isDark) {
    document.body.classList.toggle('dark-bg', isDark);
    document.documentElement.classList.toggle('dark-bg', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
}

if (light) {
    light.addEventListener('click', () => setTheme(false));
}

if (dark) {
    dark.addEventListener('click', () => setTheme(true));
}

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