
let taskslist = [];  

export const addTask = (task) => {
  taskslist.push(task);
  
};


export const updateTask = (id, updates = {}) => {
  let task = taskslist.find(task => task.id === id);
  if (task) {
    // Using destructuring to update task properties
    task = { ...task, ...updates };
   
  } else {
   
  }
};

export const deleteTask = (id) => {
  const index = taskslist.findIndex(task => task.id === id);
  if (index !== -1) {
    const deleteTask = taskslist.splice(index, 1);
  } else {
  
  }
};

// Function to view all tasks (returning a promise)
export const viewTasks = async () => {
  try {
    if (taskslist.length === 0) {
      throw new Error('No tasks to display.');
    }
    // Simulating async task fetching
    const fetchTasks = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(taskslist);
      }, 1000);
    });

    const taskList = await fetchTasks;  // Await the resolved promise
    taskList.forEach(({ id, title, description, priority }) => {
      console.log(`ID: ${id}, Title: ${title}, Description: ${description}, Priority: ${priority}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};


