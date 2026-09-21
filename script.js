/* Switch theme */

const light = document.querySelector('.sun'),
      dark = document.querySelector('.moon'),
      img_sun = document.querySelector('.theme-switch-sun'),
      img_moon = document.querySelector('.theme-switch-moon'),
      header_logo_img = document.querySelector('.header-logo img'),
      menu_icon_cup = document.querySelector('.menu-icon');

light.addEventListener('click', () => {
    document.body.classList.toggle('dark-bg');

    if (document.body.classList.contains('dark-bg')) {
        header_logo_img.src = './images/header/logo_dark.svg';
        menu_icon_cup.src = './images/header/coffee-cup_dark.svg';
        img_moon.src = './images/header/moon-dark.svg';
    } else {
        header_logo_img.src = './images/header/logo.svg';
        menu_icon_cup.src = './images/header/coffee-cup.svg';
        img_moon.src = './images/header/moon.svg';
    }

    console.log('Кнопка нажата')
}) 

