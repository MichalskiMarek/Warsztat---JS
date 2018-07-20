document.addEventListener('DOMContentLoaded', function () {
    var addBtn = document.getElementById('addTaskButton');
    var inputTask = document.getElementById('taskInput');
    var listTask = document.getElementById('taskList');
    var removeBtn = document.getElementById('removeFinishedTasksButton');
    var tasks = document.querySelector('#tasksToDo');
    var completed = 0;

    addBtn.addEventListener('click', function () {
        var newLi = document.createElement('li');
        var newH1 = document.createElement('h1');
        var newBtnDel = document.createElement('button');
        var newBtnComp = document.createElement('button');
        newH1.innerText = inputTask.value;

        if (newH1.innerText.length >= 5 && newH1.innerText.length <= 100) {
            tasks.innerText = ++completed;
            newBtnDel.innerText = 'Delete';
            newBtnComp.innerText = 'Complete';

            newLi.appendChild(newH1);
            newLi.appendChild(newBtnDel);
            newLi.appendChild(newBtnComp);
            listTask.appendChild(newLi);

            inputTask.value = '';
            newBtnComp.addEventListener('click', function () {
                newLi.classList.toggle('completed');
                if (newLi.classList.contains('completed')) tasks.innerText = --completed;
                else tasks.innerText = ++completed;
            });

            newBtnDel.addEventListener('click', function () {
                newLi.parentElement.removeChild(newLi);
                inputTask.value = '';
                if (!newLi.classList.contains('completed')) tasks.innerText = --completed;
            });

            removeBtn.addEventListener('click', function () {
                var listArr = document.querySelectorAll('#taskList li');
                for (var i=0; i<listArr.length; i++) {
                    if(listArr[i].classList.contains('completed')){
                        listArr[i].parentElement.removeChild(listArr[i]);
                    }
                }
            });
        }
        else alert('Length of task should be between 5 and 100 characters!');
    });
});
