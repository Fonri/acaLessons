function setTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  const tasks = [
    {
        id: "6",
        isCompleted: false,
        textContent: "Organize office",
    },
    {
        id: "5",
        isCompleted: false,
        textContent: "Meet Lily",
    },
    {
      id: "4",
      isCompleted: true,
      textContent: "Buy eggs",
    },
    {
      id: "3",
      isCompleted: true,
      textContent: "Read a book",
    },
    {
        id: "2",
        isCompleted: true,
        textContent: "Take a shower",
    },
    {
        id: "1",
        isCompleted: true,
        textContent: "Hit a gym",
    },
  ];
  
  setTasksToLocalStorage(tasks);