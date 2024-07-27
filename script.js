document.getElementById('addTaskButton').addEventListener('click' , function() {
const taskInput = document.getElementById('taskInput');
const taskText = taskInput.value.trim();
if(taskText) {
    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li'); //inja jalebe ke js dare yek tag jadid tu sanad HTMML ijad mikone
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center'; //inja tabe dare tu qesmate aval esme moteqayer va baedesh esme tabe ro ovorde baraye dadane styli ke aslan na khodesh hanuz tu html hast na codesh tu css
    listItem.textContent = taskText; //inja darvaqe taskText shode ke tamiz shode o trim shode beshe / textContent ham qarardadi hast yahtamel


    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function(){

        taskList.removeChild(listItem);



    });


    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';


}


});





