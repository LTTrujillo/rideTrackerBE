const express = require('express')
const app = express()
const port = 3006

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

const cors = require('cors')
const parser = require('body-parser')
const dotenv = require('dotenv')

app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
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

app.post('/lyftRide', (req, res, next) => {
  knex('lyft_info').insert(req.body, ["id", "eta_of_pickup", "estimated_price"])
  .then((lyftData) => {
    console.log("The lyftData", lyftData)
    res.status(200).send(lyftData);
  })
  .catch((err) => {
    next(err);
  });
})

app.post('/uberRide', (req, res, next) => {
  knex('uber_info').insert(req.body, ["id", "eta_of_pickup", "estimated_price"])
    .then((uberData) => {
      console.log(uberData)
      res.status(200).send(uberData);
    })
    .catch((err) => {
      next(err);
    });
})

app.post('/ride', (req, res, next) => {
  knex('ride_info').insert(req.body)
    .then((ride) => {
      console.log(ride)
      res.status(200).send(ride);
    })
    .catch((err) => {
      next(err);
    });
})

app.get('/passenger', (req, res, next) => {
  knex('ride_info')
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