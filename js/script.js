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
    })

    document.querySelector('.profile').addEventListener('click', function () {
        openModal('#login-modal')
    })
    document.querySelector('.chat').addEventListener('click', function () {
        openModal('#chat-modal')
    });

    // obsluga kalendarza
    flatpickr('.date-range input', {
        altInput: true,
        altFormat: 'd.m.Y',
        dateFormat: 'Y-m-d',
    });

    // generowanie wykresu
    var ctx = document.getElementById('myChart').getContext('2d');

    var chart = new Chart(ctx, {
        // typ wykresu
        type: 'bar',
        data: {
            // etykiety osi X
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
            // ustawienie serii danych 
            datasets: [{
                // nadanie im nazwy
                label: "Signups",
                // wybór koloru serii
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // uzupełnienie przykładowymi danymi
                data: [ 350, 200, 220, 390, 420, 400, 300, 290, 300 ],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [ 410, 180, 300, 290, 430, 120, 200, 500, 350 ],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48 ],
                // ukrycie ostatniej serii danych
                hidden: true,
            }]
        },
    });

})();