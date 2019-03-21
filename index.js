const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('hi');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT);