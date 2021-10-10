let taskText=document.querySelector("#task");
let addBtn =document.querySelector(".btn");
let taskContainer=document.querySelector(".task-container");
addBtn.addEventListener("click",function (){
    console.log("clicked")
     let task = document.createElement("div");
     task.classList.add("task");
     task.textContent=taskText.value;
     taskContainer.appendChild(task);
})
