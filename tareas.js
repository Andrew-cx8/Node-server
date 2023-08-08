const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask(description) {
  tasks.push({ description, completed: false });
  console.log('Tarea añadida.');
}

function removeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Índice inválido.');
  }
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea completada.');
  } else {
    console.log('Índice inválido.');
  }
}

function listTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
  });
}

function mainMenu() {
  rl.question('Elige una opción:\n1. Añadir tarea\n2. Eliminar tarea\n3. Completar tarea\n4. Listar tareas\n5. Salir\n', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Introduce la descripción de la tarea: ', (description) => {
          addTask(description);
          mainMenu();
        });
        break;
      case '2':
        rl.question('Introduce el índice de la tarea a eliminar: ', (index) => {
          removeTask(parseInt(index) - 1);
          mainMenu();
        });
        break;
      case '3':
        rl.question('Introduce el índice de la tarea a completar: ', (index) => {
          completeTask(parseInt(index) - 1);
          mainMenu();
        });
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
