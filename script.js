function addTask() {
  const input = document.getElementById("taskInput");
  const ul = document.getElementById("taskList");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const tasks = Array.from(ul.children).map(task => task.innerText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function toggleList() {
  const list = document.getElementById("taskList");
  const button = document.getElementById("toggleButton");
  if (list.style.display === "none") {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    list.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(task));
      list.appendChild(li);
    });

    list.style.display = "block";
    button.textContent = "Hide List";
  } else {
    list.style.display = "none";
    button.textContent = "Show List";
  }
}


const loading = document.getElementById('loading');
const taskList = document.getElementById('taskList');

function toggleLoading() {
  if (loading.style.display === 'none') {
    loading.style.display = 'block';
    taskList.style.display = 'none';
  } else {
    loading.style.display = 'none';
    taskList.style.display = 'block';
  }
}

function addTask() {
  toggleLoading();

  toggleLoading();
}

function toggleList() {
  toggleLoading();

  toggleLoading();
}


const loadingElement = document.querySelector('.loading');
loadingElement.style.display = 'block';

setTimeout(() => {
  loadingElement.style.display = 'none';
  
}, 2000);