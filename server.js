const http = require("http");

const tasks = [
  { id: 1, description: "Hacer compras", completed: false },
  { id: 2, description: "Estudiar para el examen", completed: true },
  { id: 3, description: "Hacer ejercicio", completed: false }
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(tasks));
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
