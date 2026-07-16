const express = require('express');
const app = express();
const port = 3000;

// Middleware para poder leer JSON en el body de las requests (lo necesitarás en Stage 3)
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"]
  });
});

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});