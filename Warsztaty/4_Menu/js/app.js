document.addEventListener('DOMContentLoaded', function () {
    var list = document.querySelector('.nav ul').children;
    
    for (var i=0; i<list.length; i++) {
        list[i].addEventListener('mouseover', function () {

            var subList = this.querySelector('ul');

            if (subList !== null){
                subList.style.display = 'inline-block';
            }

        });
        list[i].addEventListener('mouseout', function () {
            var subList = this.querySelector('ul');
            if (subList !== null){
                subList.style.display = 'none';
            }
        });
    } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});

