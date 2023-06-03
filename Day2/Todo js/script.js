
const   taskItem =[];
const getTaskText = ()=>{
  const taskInput = document.getElementById('task');
  const _text = taskInput.value;
  if(!_text)
  {
    alert("Enter The Task Text");
    return;
  }
  const task = {
   id :Math.floor(Math.random() * 100),
   text : _text,
   isDone : false,
   isDelete : false
  }
  taskItem.push(task);
  console.log('taskItem :>> ', taskItem);
  buildTaskList();
}

const buildTaskList = () =>{
  const taskList = document.getElementById('task-list');
  const newTaskList = taskItem.map((task)=>{

    let spanCalass = ""
    if(task.isDone)
    {
      spanCalass = "done";
    }
    const item = `<li id='${task.id}'>
              <div class="todo-item">
                    <span class="${spanCalass}">${task.text}</span>
                    <button class="btn-done"
                     onclick="doneHandler(${task.id})">Done</button>
                    <button class="btn-delete">Delete</button>
              </div>
            </li>`;

  return item;
  });

  console.log('newTaskList :>> ', newTaskList);

  taskList.innerHTML =newTaskList.join(' ')
}


const doneHandler = (id) =>{
  taskItem.forEach((task)=>{
    if(id === task.id)
    {
      task.isDone = ! task.isDone;
    }
  });
 buildTaskList();
}
