document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('#gallery img');

    var buttonHide = document.getElementById('hideButton');

    var buttonShow = document.getElementById('showButton');

    var inputTag = document.getElementById('tagInput');

    buttonHide.addEventListener('click', function (e) {
        var text = inputTag.value;

        for (var i = 0; i < images.length; i++) {
            if (images[i].dataset.tag.indexOf(text) !== -1) {
                images[i].classList.add('invisible');
            }
            else {
                images[i].classList.remove('invisible');
            }
        }
        inputTag.value = '';
    });

    buttonShow.addEventListener('click', function () {
        var text = inputTag.value;

        for (var i = 0; i < images.length; i++) {
            if (images[i].dataset.tag.indexOf(text) !== -1) {
                images[i].classList.remove('invisible');
            }
            else {
                images[i].classList.add('invisible');
            }
        }
        inputTag.value = '';
    });
});