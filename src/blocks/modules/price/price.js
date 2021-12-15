(function toggleTabs () {
	const priceBtn = document.querySelectorAll('.price-top-btn');
	const tab = document.querySelectorAll('.price-bottom');
	// const select = document.querySelector('.children-page__mob-nav');

	if (priceBtn && tab && (priceBtn.length == tab.length)) {
		for (let i = 0; i < priceBtn.length; i++) {
			priceBtn[i].addEventListener('click', function(e) {
				e.preventDefault();
				changeActive(i);
			})
		}
	}

	// if (select) {
	// 	select.addEventListener('change', function(e) {
	// 		let item = select.value;
	// 		changeActive(item);
	// 	})
	// }

	function changeActive(n) {
		for (let i = 0; i < priceBtn.length; i++) {
			priceBtn[i].classList.remove('price-top-btn--active');
			tab[i].classList.remove('price-bottom--active');
		}
		priceBtn[n].classList.add('price-top-btn--active');
		tab[n].classList.add('price-bottom--active');
	}

})();


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let button = document.querySelectorAll('.price-card');
        let font = document.querySelectorAll('.font');
        let price = document.querySelectorAll('.price-card__price');
        let priceSpan = document.querySelectorAll('.price-card__span');
        let white = document.querySelectorAll('.price-card__info');
        let btn = document.querySelectorAll('.card-info__btn');

        for (let i = 0; i < button.length && i < font.length && i < white.length && i < price.length &&
            i < btn.length && i < priceSpan.length; i++) {
            button[i].addEventListener('mouseover', () => {
                button[i].classList.add('change');
                price[i].classList.add('white');
                priceSpan[i].classList.add('white');
                font[i].classList.add('white');
                white[i].classList.add('white');
                btn[i].classList.add('card-btn--hover');
                // console.log(font[i]);
            });
            button[i].addEventListener('mouseout', () => {
                button[i].classList.remove('change');
                price[i].classList.remove('white');
                priceSpan[i].classList.remove('white');
                font[i].classList.remove('white');
                white[i].classList.remove('white');
                btn[i].classList.remove('card-btn--hover');

            });
        };
    });
})();
