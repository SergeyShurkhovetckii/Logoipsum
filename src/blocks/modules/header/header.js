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

    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                header.classList.add('header--fixed');

            } else {
                header.classList.remove('header--fixed');
            }
        })
    }
})();

