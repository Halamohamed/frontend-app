const express = require('express');

const app = express();

const pages = require('./routes/pages.js');

const PORT = process.env.PORT || 4500;

app.use(express.json());

app.use(('/api'), pages);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})
