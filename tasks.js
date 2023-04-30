function handleTaskClick(e){
  const currentTask = e.currentTarget;

  currentTask.classList.toggle("completed");
  const currentTaskId = currentTask.getAttribute('data-id'); 

  const tasks = getTasksFromLocalStorage();

  const updatedTasks = tasks.map(task => task.id === currentTaskId ? {
    ...task,
    isCompleted: currentTask.classList.contains("completed"),
  } : task);

  setTasksToLocalStorage(updatedTasks);
}

async function addTask() {
  const input = document.getElementById("taskInput");
  if(!input.value.length) return;

  const tasksList = document.getElementById("tasksList");
  const newTaskId = Math.random().toString();

  const newTask = createNewTask({
    id: newTaskId,
    textContent: input.value,
    onClick: handleTaskClick,
  });

  const tasks = getTasksFromLocalStorage();

  setTasksToLocalStorage([{
    id: newTaskId,
    isCompleted: false,
    textContent: input.value,
  }, ...tasks]);

  await showLoading();

  tasksList.prepend(newTask);
  input.value = "";
}


async function toggleList() {
  const tasksList = document.getElementById("tasksList");
  const toggleButton = document.getElementById("toggleButton");

  if (tasksList.style.display === "none") {
    await showLoading();
    const tasks = getTasksFromLocalStorage();

    tasksList.innerHTML = '';
    tasks.forEach(task => {
      const tasksListElement = createNewTask({...task, onClick: handleTaskClick})
      tasksList.appendChild(tasksListElement);
    });

    tasksList.style.display = "block";
    toggleButton.textContent = "Hide List";
  } else {
    tasksList.style.display = "none";
    toggleButton.textContent = "Show List";
  }
}

const addButton = document.getElementById('addButton');
const toggleButton = document.getElementById('toggleButton');

addButton.addEventListener('click', addTask);
toggleButton.addEventListener('click', toggleList);