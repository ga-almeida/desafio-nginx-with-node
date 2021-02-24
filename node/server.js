const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const conn = mysql.createConnection(config)

app.get('/', (req, res) => {

    let resultsSelect;

    const sqlInsert = `INSERT INTO people(name) values('Gabriel')`
    conn.query(sqlInsert, function(error, results, fields) {
        console.log(results)
    })

    const sqlSelect = 'SELECT * FROM people'
    conn.query(sqlSelect, function (error, results, fields) {
        resultsSelect = results;
    })
    
    res.send(`<h1>Full Cycle Rocks!</h1> ${resultsSelect}`)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})