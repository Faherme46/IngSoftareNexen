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

app.get('/api/vehicles/:id', (req, res) => {
  let sql = `SELECT * FROM vehicles WHERE id= ${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
// Rutas para el CRUD


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

app.get('/api/users', (req, res) => {
  let sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
// Rutas para el CRUD


app.post('/api/users', (req, res) => {
  let newVehicle = req.body;
  let sql = 'INSERT INTO users SET ?';
  db.query(sql, newVehicle, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put('/api/users/:id', (req, res) => {
  let updatedVehicle = req.body;
  let sql = `UPDATE users SET ? WHERE id = ${req.params.id}`;
  db.query(sql, updatedVehicle, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.delete('/api/users/:id', (req, res) => {
  let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


app.get('/api/solicitudes', (req, res) => {
  let sql = 'SELECT * FROM solicitudes';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/api/solicitudes/:id', (req, res) => {
  let sql = `SELECT * FROM solicitudes WHERE id = ${req.params.id}`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});


app.post('/api/solicitudes', (req, res) => {
  console.log('process')
  let newSolicitud = req.body;
  let sql = 'INSERT INTO solicitudes SET ?';
  db.query(sql, newSolicitud, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put('/api/solicitudes/:id', (req, res) => {
  console.log('actualizando solicitud')
  let updatedSolicitud = req.body;
  let sql = `UPDATE solicitudes SET ? WHERE id = ${req.params.id}`;
  db.query(sql, updatedSolicitud, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/api/actions', (req, res) => {
  const query = 'SELECT * FROM actions';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching actions:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});


app.post('/api/actions', (req, res) => {
  let newAction = req.body;
  let sql = 'INSERT INTO actions SET ?';
  db.query(sql, newAction, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
