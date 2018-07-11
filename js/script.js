'use strict';
(function () {
    /*Po wywołaniu toggleMenu(true), do obiektu z klasą menu zostanie dodana klasa show, 
    a po wywołaniu toggleMenu(false) zostanie ona usunięta.*/
    function toggleMenu(visible) {
        document.querySelector('.section--sidebar').classList.toggle('show', visible)
    }

    document.querySelector('.hamburger').addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu()
    });

})();