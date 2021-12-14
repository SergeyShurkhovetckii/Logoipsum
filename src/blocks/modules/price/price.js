

document.addEventListener('DOMContentLoaded', () => {
    let button = document.querySelectorAll('[data-button]');
    let font = document.querySelectorAll('.font');
    let price = document.querySelectorAll('.price-card__price');
    let priceSpan = document.querySelectorAll('.price-card__span');
    let white = document.querySelectorAll('.price-card__info');
    let btn = document.querySelectorAll('.card-info__btn');

    for (let i = 0; i < button.length && i < font.length && i <white.length && i < price.length
         && i < btn.length && i <priceSpan.length; i++) {
                button[i].addEventListener('mouseover', () => {
                    button[i].classList.add('change');
                    price[i].classList.add('white');
                    priceSpan[i].classList.add('white');
                    font[i].classList.add('white');
                    white[i].classList.add('white');
                    btn[i].classList.add('card-btn--hover');
                    console.log(font[i]);
                });
            button[i].addEventListener('mouseout', () => {
                button[i].classList.remove('change');
                price[i].classList.remove('white');
                priceSpan[i].classList.remove('white');
                font[i].classList.remove('white');
                white[i].classList.remove('white');
                btn[i].classList.remove('card-btn--hover');

            })};      
});