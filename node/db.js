async function connect() { 
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@db:3306/nodedb");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectPeoples() {
    const conn = await connect();

    const sqlSelect = 'SELECT * FROM people;';
    const [rows] = await conn.query(sqlSelect);

    return await rows;
}

async function insertPeople() {
    const conn = await connect();

    const numer = Math.random() * (100 - 1) + 1;

    const sqlInsert = `INSERT INTO people(name) values('Gabriel Almeida ${numer}');`;
    await conn.query(sqlInsert);
}

module.exports = {selectPeoples, insertPeople}