'use strict';


let overlay = document.querySelector('.overlay');

//меню для перемещения в будущем, закрыто по дефолту
let burBtn = document.querySelector('.burger-menu');
//все кнопки для передвижения меню(для открытия и закрытия)
let openClose = document.querySelectorAll('.active');

/*for(let i = 0; i < openClose.length; i++) {
    openClose[i].addEventListener('click', function() {
        burBtn.classList.toggle('open');
    });
}*/
//весь бади считываем
/*const fullBody = document.querySelector('body');*/

//закрытие тени
/*overlay.addEventListener('click', function() {
    overlay.style.toggle('overOp');
})*/

openClose.forEach(element => {
    element.addEventListener('click', function() {
        burBtn.classList.toggle('open');
        overlay.classList.toggle('overOp');
    });
});
//для закрытия при клике вне меню
/*
fullBody.addEventListener('click', (event) => {
    if (!(event.target.closest('.burger-button') || event.target.closest('.burger-menu'))) {
        burBtn.classList.remove('open');
        /*if(!(burBtn.classList.contains('open'))) {
            overlay.style.toggle('overOp');
        }*/
    /*}
    if (!(event.target.closest('.popap-open-btn') || event.target.closest('.popap'))) {
        popap.classList.remove('popap-top');
        /*if(!(burBtn.classList.contains('open'))) {
            overlay.style.toggle('overOp');
        }*/
    /*}
}); 
*/
overlay.addEventListener('click', (event) => {
    if (!(event.target.closest('.burger-button') || event.target.closest('.burger-menu'))) {
        burBtn.classList.remove('open');
        overlay.classList.remove('overOp');
        
    }
    if (!(event.target.closest('.popap-open-btn') || event.target.closest('.popap'))) {
        popap.classList.remove('popap-top');
        overlay.classList.remove('overOp');
    }
});
//////////////////////////////////////

console.log('1. Слайдер изображений в секции destinations +50  \n2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \n3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25\nИтого: 100 баллов');
/*if (burBtn.classList.contains('open')) {
    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(burBtn);
     
        if ( !withinBoundaries) {
            burBtn.classList.toggle('open');
        }
    });
}*/


//далее код слайдера

let def = 0; //изначальное положение центрального элемента

//получение элементов картинок и контейнера слайдера
const slider = document.querySelector('.slider');
const spaCard = document.querySelector('.photo-spain');
const japCard = document.querySelector('.photo-japan');
const usaCard = document.querySelector('.photo-usa');
//получение значения ширины картинки и после gap-а
let cardWidth = japCard.offsetWidth;
let gapWidth = getComputedStyle(slider).gap.replace(/[^0-9]/g,"");
let sumW = Number(cardWidth) + Number(gapWidth);

//для изменения выборки точки
const lDot = document.querySelector('.dotter-left');
const cDot = document.querySelector('.dotter-center');
const rDot = document.querySelector('.dotter-right');

//для мобильной версии - получаем стрелочки, потом вешаем слушателя
const left = document.querySelector('.left');
const right = document.querySelector('.right');


//дефолтное состояние точки по центру
cDot.style.background = '#F2785C';

spaCard.addEventListener('click', function() {
    if(def == 0) {
        def += sumW;
        slider.style.left = def + 'px';
    }
    lDot.style.background = '#F2785C';
    cDot.style.background = 'rgba(242, 120, 92, 0.5)';
    rDot.style.background = 'rgba(242, 120, 92, 0.5)';
})

japCard.addEventListener('click', function() {
    def = 0;
    slider.style.left = def + 'px';
    lDot.style.background = 'rgba(242, 120, 92, 0.5)';
    cDot.style.background = '#F2785C';
    rDot.style.background = 'rgba(242, 120, 92, 0.5)';
})

usaCard.addEventListener('click', function() {
    if(def == 0) {
        def -= sumW;
        slider.style.left = def + 'px';
    }
    lDot.style.background = 'rgba(242, 120, 92, 0.5)';
    cDot.style.background = 'rgba(242, 120, 92, 0.5)';
    rDot.style.background = '#F2785C';
})

//ниже изменение, но только через нажатие точки


lDot.addEventListener('click', function() {
    if(def == 0) {
        def += sumW;
        slider.style.left = def + 'px';
        lDot.style.background = '#F2785C';
        cDot.style.background = 'rgba(242, 120, 92, 0.5)';
        rDot.style.background = 'rgba(242, 120, 92, 0.5)';
        left.classList.add('leftAdd');
        right.classList.remove('rightAdd');
    }
    if(def < 0) {
        def += sumW*2;
        slider.style.left = def + 'px';
        lDot.style.background = '#F2785C';
        cDot.style.background = 'rgba(242, 120, 92, 0.5)';
        rDot.style.background = 'rgba(242, 120, 92, 0.5)';
        left.classList.add('leftAdd');
        right.classList.remove('rightAdd');
    }
})

cDot.addEventListener('click', function() {
    def = 0;
    slider.style.left = def + 'px';
    lDot.style.background = 'rgba(242, 120, 92, 0.5)';
    cDot.style.background = '#F2785C';
    rDot.style.background = 'rgba(242, 120, 92, 0.5)';
    right.classList.remove('rightAdd');
    left.classList.remove('leftAdd');
})

rDot.addEventListener('click', function() {
    if(def == 0) {
        def -= sumW;
        slider.style.left = def + 'px';
        lDot.style.background = 'rgba(242, 120, 92, 0.5)';
        cDot.style.background = 'rgba(242, 120, 92, 0.5)';
        rDot.style.background = '#F2785C';
        right.classList.add('rightAdd');
        left.classList.remove('leftAdd');
    }
    if(def > 0) {
        def -= sumW*2;
        slider.style.left = def + 'px';
        lDot.style.background = 'rgba(242, 120, 92, 0.5)';
        cDot.style.background = 'rgba(242, 120, 92, 0.5)';
        rDot.style.background = '#F2785C';
        right.classList.add('rightAdd');
        left.classList.remove('leftAdd');
    }
})

//для стрелок перемещение 
left.addEventListener('click', function() {
    if(def <= 0) {
        def += sumW;
        slider.style.left = def + 'px';
        if (def == 0) {
            lDot.style.background = 'rgba(242, 120, 92, 0.5)';
            cDot.style.background = '#F2785C';
            rDot.style.background = 'rgba(242, 120, 92, 0.5)';
            right.classList.remove('rightAdd');
        }
        if (def > 0) {
            lDot.style.background = '#F2785C';
            cDot.style.background = 'rgba(242, 120, 92, 0.5)';
            rDot.style.background = 'rgba(242, 120, 92, 0.5)';
            left.classList.add('leftAdd');
        }
        
    }
})

right.addEventListener('click', function() {
    if(def >= 0) {
        def -= sumW;
        slider.style.left = def + 'px';
        if (def == 0) {
            lDot.style.background = 'rgba(242, 120, 92, 0.5)';
            cDot.style.background = '#F2785C';
            rDot.style.background = 'rgba(242, 120, 92, 0.5)';
            left.classList.remove('leftAdd');
        }
        if (def < 0) {
            lDot.style.background = 'rgba(242, 120, 92, 0.5)';
            cDot.style.background = 'rgba(242, 120, 92, 0.5)';
            rDot.style.background = '#F2785C';
            right.classList.add('rightAdd');
        }
    }
})

//ниже код открытия и закрытия попапа
let openBtn = document.querySelectorAll('.popap-open-btn');

//получаем сам попап, в нём будем менять значение 
//top у .popap от -100% до 50%, так оно будет сверху вниз выезжать, плавность так же подрегулируем
//нажатие на кнопку даёт left: 50%, нажатие вне попапа удаляет свойство в 50%, по дефолту -100%
let popap = document.querySelector('.popap');

//функция открытия
openBtn.forEach(element => {
    element.addEventListener('click', function() {
        popap.classList.toggle('popap-top');
        overlay.classList.add('overOp');
    });
});
////////////////

//работа с формой и вывод данных
document.querySelector('.popap-sign').addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    alert(email + ' ' + password);
})

//для изменения данных
let width = document.documentElement.clientWidth;
document.querySelector('.register').addEventListener('click', () => {
    //тут можно получить данные о ширине экрана и адаптировать регистер форму по высоте(по медиа запросам данные взять)
    console.log(width);
    if(width > 730) {
        document.querySelector('.popap').style.height = '436px';
    } else {
        document.querySelector('.popap').style.height = '265px';
    }
    document.querySelector('.popap-header').innerHTML = 'Create account';
    document.querySelector('.label-email').style.marginTop = '30px';
    document.querySelector('.popap-facebook').style.display = 'none';
    document.querySelector('.popap-google').style.display = 'none';
    document.querySelector('.or').style.display = 'none';
    document.querySelector('.forgot').style.display = 'none';
    document.querySelector('.popap-register').style.display = 'none';
    document.querySelector('.popap-change').style.display = 'block'; 

})


