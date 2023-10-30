let arrTask = [];
let editIndex = -1;
 
function displayTask(){
    let taskList = document.getElementById ('taskList');
    taskList.innerHTML ="";

    arrTask.forEach(function(task, index){
        let listItem = document.createElement('li');
        listItem.innerHTML = task + "  " + '<button onclick = "editTask(' + index + ')">Edit</button>  <button onclick = "deleteTask( ' + index + ')">Delete</button>'; 
    taskList.appendChild(listItem);
})
}
function addTask(){
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value;
    if(task !== ""){
        arrTask.push(task);
        taskInput.value = '';
        displayTask();
    }
}
function deleteTask(index){
    arrTask.splice( index, 1);
    displayTask();

}
function editTask(index){
     let taskInput = document.getElementById('taskInput');
     taskInput.value = arrTask[index];
     editIndex = index;
     taskInput.focus();

}
function update(){
    if(editIndex !== -1){
        let taskInput = document.getElementById('taskInput');
        arrTask[editIndex] = taskInput.value;
        taskInput.value = "";
        editIndex = -1;
        displayTask();
    }
}