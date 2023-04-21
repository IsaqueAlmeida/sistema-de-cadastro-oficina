const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database',
})

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

connection.connect();
// rota para inserir um novo serviço

app.post('/services', (req, res) => {
  const { customerName, vehicleData, serviceName, partUsed, totalPrice, startDate, endDate } = req.body;
  const query = `INSERT INTO services (
      customer_name,
      vehicle_data,
      service_name,
      part_used,
      total_price,
      start_date,
      end_date
    )
    VALUES (
      '${ customerName },
      '${ vehicleData }',
      '${ serviceName }',
      '${ partUsed }',
      '${ totalPrice }',
      '${ startDate }',
      '${ endDate }'
    )`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro ao cadastrar serviço!');
    } else {
      res.status(200).send('Serviço cadastrado com sucesso!');
    }
  });
});

// rota para listar todos os serviços
app.get('/services', (req, res) => {
  const query = 'SELECT * FROM services';
  connection.query(query, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('Ocorreu um erro ao buscar os serviços.');
    } else {
      res.status(200).json(results);
    }
  });
});

// connection.end();
