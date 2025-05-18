const express = require('express');
const _ = require('lodash');
const app = express();

let todos = [];

app.get('/', (req, res) => {
    res.send('Todo List');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});