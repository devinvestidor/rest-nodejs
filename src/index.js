const express = require('express'); //Importação do express
const bodyParser = require('body-parser') //Importação do body-parser

const app = express(); //Variável app


app.use(bodyParser.json()); //Define que a aplicação irá receber objetos do tipo json
app.use(bodyParser.urlencoded({ extended: false })); //Utilizado para entender parâmetros via URL

require('./app/controller/crudController')(app); //Importação do controller criado passando a váriavel app adiante


app.listen(3000); //Porta que a aplicação ficará ouvindo