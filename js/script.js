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

    // funkcje dotyczace modali
    function closeModal() {
        document.getElementById('overlay').classList.remove('show')
    }

    document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            closeModal()
        })
    })

    document.querySelector('#overlay').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal()
        }
    })

    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 27) {
            closeModal()
        }
    })

    function openModal(modal) {
        document.querySelectorAll('#overlay > *').forEach(function (modal) {
            modal.classList.remove('show')
        })
        document.querySelector('#overlay').classList.add('show')
        document.querySelector(modal).classList.add('show')
    }

    document.querySelector('.exit').addEventListener('click', function () {
        openModal('#quit-modal')
    });

    // obsluga kalendarza
    flatpickr('.date-range input', {
        altInput: true,
        altFormat: 'd.m.Y',
        dateFormat: 'Y-m-d',
    });

})();