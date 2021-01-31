// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando o express
const server = express();
server
// utilizando arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// criar uma rotas da aplicação
.get('/', pages.index)
.get('/orfanato', pages.orfanato)
.get('/orfanatos', pages.orfanatos)
.get('/create-orfanato', pages.createOrfanato)

// ligar o servidor
server.listen(5500)