const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://emersonthiago168:Emerson5125@cluster0.eatufk7.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority';
mongoose.connect(connectionString)
    .then(() => console.log('Agora que a conexão ocorreu'));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios Middlewares
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000'); // 127.0.0.1
    console.log('Servidor executando na porta 3000');
});