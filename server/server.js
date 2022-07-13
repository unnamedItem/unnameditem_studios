require('dotenv').config();

const express = require('express');
const serveStatic = require('serve-static');
const ig = require('./ig.api');
const path = require('path');
const app = express();

app.use('/', serveStatic(path.join(__dirname, '../dist')));

app.get(/^((?!(\/ig$|\/ig\/)).)*$/, function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.get('/ig/media', async function(req, res) {
    var media = await ig.getMedia();
    res.json(JSON.parse(media));
})

app.get('/ig/profile', async function(req, res) {
    var profile = await ig.getProfile();
    res.json(JSON.parse(profile));
})

app.get('/ig/media/:mediaId', async function(req, res) {
    var mediaContent = await ig.getMediaContent(req.params.mediaId);
    res.json(JSON.parse(mediaContent));
})

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`site is listening on port: ${port}`);