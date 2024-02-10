// server.js
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/app.highlightstranslations.ro/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/app.highlightstranslations.ro/fullchain.pem', 'utf8');

const httpsOptions = {
    key: privateKey,
    cert: certificate
};


//Serve static files from the public directory
app.use(express.static('public'));

const server = https.createServer(httpsOptions, app);

const PORT = 443;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


