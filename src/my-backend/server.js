const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root2',
  password: 'root',
  database: 'vehicles_db'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Rutas para el CRUD
app.get('/api/vehicles', (req, res) => {
  let sql = 'SELECT * FROM vehicles';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/api/vehicles', (req, res) => {
  let newVehicle = req.body;
  let sql = 'INSERT INTO vehicles SET ?';
  db.query(sql, newVehicle, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put('/api/vehicles/:id', (req, res) => {
  let updatedVehicle = req.body;
  let sql = `UPDATE vehicles SET ? WHERE id = ${req.params.id}`;
  db.query(sql, updatedVehicle, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/api/vehicles/:id', (req, res) => {
  let sql = `DELETE FROM vehicles WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
