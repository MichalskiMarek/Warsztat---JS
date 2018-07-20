document.addEventListener('DOMContentLoaded', function () {
    var prev = document.getElementById('prevPicture');
    var next = document.getElementById('nextPicture');

    var list = document.querySelectorAll('.slider ul li');

    var activ = 0;

    list[activ].classList.add('visible');

    next.addEventListener('click', function () {
        activ++;

        for (var i = 0; i < list.length; i++) {
            if (activ >= 6) activ = i;
                list[i].classList.remove('visible');
                list[activ].classList.add('visible');
        }
    });
    prev.addEventListener('click', function () {
        activ--;
        if (activ < 0) {
            activ = list.length - 1;
        }
        for (var i = 0; i < list.length; i++) {
            list[i].classList.remove('visible');
            list[activ].classList.add('visible');

        }
    });
})
;