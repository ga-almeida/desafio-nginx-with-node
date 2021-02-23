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

const sqlInsert = `INSERT INTO people(name) values (Gabriel ${new Date()})`
conn.query(sqlInsert)

let resultsSelect;
const sqlSelect = 'SELECT name FROM people'
conn.query(sqlSelect, (error, results, fields) => {
    resultsSelect = results.map(result => result.name)
})

conn.end()

app.get('/', (req, res) => {
    res.send(`<h1>Full Cycle Rocks!</h1> ${resultsSelect}`)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})