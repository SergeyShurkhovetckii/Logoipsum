import Mmenu from 'mmenu-js';

(function() {
	new Mmenu( "#menu", {
		"extensions": [
		"pagedim-black",
		"position-front"
		],
		"navbar": {
			"title": "Logoipsum",
			"sticky": false
		},
	});
})();


(function fixedMenuScroll() {
    const header = document.querySelector('.header-scroll');
    const heder_scroll = document.querySelector('.header');

    if (header && heder_scroll ) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                header.classList.add('header--fixed');
                heder_scroll.classList.add('header-sc');

            } else {
                header.classList.remove('header--fixed');
                heder_scroll.classList.remove('header-sc');
            }
        })
    }
})();

