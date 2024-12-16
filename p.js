const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoints del backend
app.get('/queue', (req, res) => {
  res.json({ queue: [] });
});

app.post('/add-service', (req, res) => {
  res.json({ queue: ['service1'] });
});

app.post('/next-service', (req, res) => {
  res.json({ message: 'Next service attended', nextService: 'service1', queue: [] });
});

// Escuchar en 0.0.0.0 para aceptar conexiones externas
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
