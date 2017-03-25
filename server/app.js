// https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d#.xw750ifx9

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/key', (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(process.env.GOOGLE_MAPS_KEY));
  } catch(ex) {
    console.error('Error getting key ', ex);
  }
});

const BASE_URL = 'https://www.loves.com/api/sitecore/Location';

app.get('/api/locations', async (req, res, next) => {
  try {
    const stream = await fetch(`${BASE_URL}/GetLovesLocations`)
    const locations = await stream.json();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(locations));
  } catch(ex) {
    console.error('Error getting locations ', ex);
  }
});

app.get('/api/states', async (req, res, next) => {
  try {
    const url = `${BASE_URL}/GetStates`;
    console.log(`Getting states from ${url}`)
    const stream = await fetch(url)
    const locations = await stream.json();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(locations));
  } catch(ex) {
    console.error('Error getting states ', ex);
  }
});

app.get('/api/cities', async (req, res, next) => {
  try {
    const stream = await fetch(`${BASE_URL}/GetCities?state=${req.query.state}`)
    const locations = await stream.json();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(locations));
  } catch(ex) {
    console.error('Error getting cities ', ex);
  }
});

app.get('/api/stores/types', async (req, res, next) => {
  try {
    const stream = await fetch(`${BASE_URL}/GetStoreTypes`)
    const types = await stream.json();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(types));
  } catch(ex) {
    console.error('Error getting location types ', ex);
  }
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;