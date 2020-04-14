const express = require('express');
const cors = require('cors');
const router = require('./router');
const path = require('path');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const app = express();
app.use(cors());
const port = 3001;

app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));