const express = require('express');
const db = require("./db");

const app = express();
const port = 3000;

app.get('/', async (req, res) => {

    await db.insertPeople();

    const peoples = await db.selectPeoples();
    
    res.send(`<h1>Full Cycle Rocks!</h1> ${JSON.stringify(peoples)}`);
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});