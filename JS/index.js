let taskText=document.querySelector("#task");
let addBtn =document.querySelector(".btn");
let taskContainer=document.querySelector(".task-container");
let taskArray=[];
// create tasks
addBtn.addEventListener("click",function (){
    if (taskText.value!==""){
        let task = document.createElement("div");
        let time =document.createElement("i");
        task.classList.add("task");
        task.textContent=taskText.value;
        if (!((task.textContent[0]>"a" && task.textContent[0]<"z") ||(task.textContent[0]>"A" && task.textContent[0]<"Z"))){
            task.classList.add("arabic");   
        }
        taskArray.push(task.textContent);
        time.classList.add("fa-times");
        time.classList.add("fas");
        task.appendChild(time);
        taskContainer.appendChild(task);
        time.addEventListener("click",close);
        task.id = taskArray.length-1 ;
        time.id = taskArray.length-1  ;
        window.localStorage[`task`]=taskArray;
        window.location = window.location.href;
    }
});
// close and remove the task 
function close () {
   let thisId = this.getAttribute("id");
   taskArray.splice(thisId,1);
   window.localStorage[`task`]=taskArray;
   taskContainer.innerHTML="";
   createList();
}
// reading tasks from memory
if (window.localStorage.key(0)){
    taskArray=window.localStorage[`task`];
    taskArray=taskArray.split(",");
    createList();
}
function  createList() {
    for (let i=1;i<taskArray.length ;i++){
        let task = document.createElement("div");
        let time =document.createElement("i");
        task.classList.add("task");
        task.textContent=taskArray[i];
        if (!((task.textContent[0]>"a" && task.textContent[0]<"z") ||(task.textContent[0]>"A" && task.textContent[0]<"Z"))){
            task.classList.add("arabic");   
        }
        time.classList.add("fa-times");
        time.classList.add("fas");
        task.appendChild(time);
        taskContainer.appendChild(task);
        time.addEventListener("click",close);
        task.id = i;
        time.id = i;
    }
}