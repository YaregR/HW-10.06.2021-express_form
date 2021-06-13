const express = require('express');
const server = express();
const path = require('path');
const axios = require('axios');

server.use(express.urlencoded({ extended: false })); 

let html = `
<form method="POST" action="/name">
    <input type="text" name="Name" placeholder="Name">
    <button type="submit">Send</button>
</form>
`;

server.get('/', (req, res) => {
    res.send(html);
});


server.post('/name', (req, res) => {
    console.log('body:', req.body);
    res.send('OK');
});

server.listen(8000);