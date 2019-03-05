const express = require('express')
const app = express()
const port = 3000

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);


app.get('/', (req, res, next) => {
  knex('uber_info')
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    next(err);
  });
})

app.get('/uber', (req, res, next) => {
  knex('uber_info')
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    next(err);
  });
})

app.get('/passenger', (req, res, next) => {
  knex('passenger_info')
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    next(err);
  });
})

app.get('/lyft', (req, res, next) => {
  knex('lyft_info')
  .then((rows) => {
    res.send(rows);
  })
  .catch((err) => {
    next(err);
  });
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))