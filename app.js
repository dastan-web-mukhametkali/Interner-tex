const express = require('express');
const app = express();

// 1. Логгер 1: Сұраныс уақыты мен түрін көрсету
app.use((req, res, next) => {
    const requestTime = new Date().toLocaleString();
    console.log(`[${requestTime}] ${req.method} ${req.url}`);
    next();
});

// 2. Логгер 2: Сұраныс түрі мен мекенжайын көрсету
app.use((req, res, next) => {
    console.log(`${req.method} сұранысы ${req.url} мекенжайына жіберілді.`);
    next();
});

// Басты бет маршруты
app.get('/das', async (req, res) => {
    res.send('Менің есімім Дастан жасым 21 де.');
});

// /about маршруты
app.get('/about', async (req, res) => {
    res.send('Бұл сервер Node.js және Express.js негізінде жасалған.');
});

// Серверді 3000 портына қосу
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер ${PORT} портында жұмыс істеуде...`);
});
