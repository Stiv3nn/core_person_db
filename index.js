const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurazione della connessione al Database 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Verifica la connessione a MySQL
db.connect((err) => {
    if (err) {
        console.log('Errore di connessione al database:', err.message);
        return;
    }
    console.log('Connessione al database MySQL riuscita con successo!')
});

// Rotta di prova principale
app.get('/', (req, res) => {
    res.send('Il backend del progetto utenti è attivo');

});

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server backend in esecuzione sulla porta ${PORT}`);
});
