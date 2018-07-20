document.addEventListener('DOMContentLoaded', function () {
    /*
     <div class="fullScreen">
       <img src="./images/wrong.png">
       <button class="close">Close</button>
     </div>
     */
    var list = document.querySelectorAll('.gallery ul li img');
    var bodyHtml = document.querySelector('body');

    var newDiv = document.createElement('div');
    var newImg = document.createElement('img');
    var newBtn = document.createElement('button');

    console.log(newBtn);

    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function () {

            newDiv.classList.add('fullScreen');
            newImg.src = this.src;
            newBtn.classList.add('close');
            newBtn.innerText=('Zamknij')

            newDiv.appendChild(newImg);
            newDiv.appendChild(newBtn);
            bodyHtml.appendChild(newDiv);

        })
    }

    newBtn.addEventListener('click', function () {
        var toRemove = document.querySelector('body div:last-child');
        toRemove.parentElement.removeChild(toRemove);
    })


});
