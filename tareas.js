const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask(description) {
  return new Promise((resolve, reject) => {
    tasks.push({ description, completed: false });
    resolve('Tarea añadida.');
  });
}

function removeTask(index) {
  return new Promise((resolve, reject) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      resolve('Tarea eliminada.');
    } else {
      reject('Índice inválido.');
    }
  });
}

function completeTask(index) {
  return new Promise((resolve, reject) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      resolve('Tarea completada.');
    } else {
      reject('Índice inválido.');
    }
  });
}

function listTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
  });
}

async function mainMenu() {
  rl.question('Elige una opción:\n1. Añadir tarea\n2. Eliminar tarea\n3. Completar tarea\n4. Listar tareas\n5. Salir\n', async (choice) => {
    switch (choice) {
      case '1':
        const description = await new Promise(resolve => rl.question('Introduce la descripción de la tarea: ', resolve));
        try {
          const result = await addTask(description);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        mainMenu();
        break;
      case '2':
        const indexToRemove = await new Promise(resolve => rl.question('Introduce el índice de la tarea a eliminar: ', resolve));
        try {
          const result = await removeTask(parseInt(indexToRemove) - 1);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        mainMenu();
        break;
      case '3':
        const indexToComplete = await new Promise(resolve => rl.question('Introduce el índice de la tarea a completar: ', resolve));
        try {
          const result = await completeTask(parseInt(indexToComplete) - 1);
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        mainMenu();
        break;
      case '4':
        listTasks();
        mainMenu();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida.');
        mainMenu();
    }
  });
}

mainMenu();
