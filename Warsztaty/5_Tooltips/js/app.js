document.addEventListener('DOMContentLoaded', function () {
    var tooltips = document.querySelectorAll('.tooltip');

    var newTooltip = document.createElement('span');
    newTooltip.classList.add('tooltipText');


    for (var i=0; i<tooltips.length; i++) {
        tooltips[i].addEventListener('mouseover' , function () {
            newTooltip.innerText = this.dataset.text;
            this.appendChild(newTooltip);
        });
        tooltips[i].addEventListener('mouseout' , function () {
            var toRemove = newTooltip;
            newTooltip.parentElement.removeChild(newTooltip);
        });

    } 




});


/*
 <span class="tooltipText">Text tooltipa</span>
 */
