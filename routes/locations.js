const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/', async (req, res, next) => {
    const stream = await fetch('https://www.loves.com/api/sitecore/Location/GetLovesLocations')
    const locations = await stream.json();
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(locations));
});

module.exports = router;
