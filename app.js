const express = require("express");
const app = express();
const port = 3000;

let items = [
  { id: 1, name: "Котёнок", cost: 100 },
  { id: 2, name: "Собака", cost: 150 },
  { id: 3, name: "Хомяк", cost: 200 },
];

// Middleware для парсинга JSON
app.use(express.json());

// Маршруты
app.get("/", (req, res) => {
  res.send("Главная страница");
});

app.get("/items", (req, res) => {
  res.send(JSON.stringify(items));
});

app.get("/items/:id", (req, res) => {
  let item = items.find((u) => u.id == req.params.id);
  res.send(JSON.stringify(item));
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
