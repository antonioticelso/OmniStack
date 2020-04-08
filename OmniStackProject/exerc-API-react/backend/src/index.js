/**
 * 
 * GET -> Buscar uma informação do back-end
 * POST -> Criar uma informação no back-end
 * PUT -> Alterar uma informação no back-end
 * DELETE -> excluir uma informação no back-end
 * 
 */

 /**
  * 
  * QUERY PARAMS: Parâmetros nomeados enviados na rota após '?' (filtros, paginação)
  * ROUTE PARAMS: Parâmetros utilizados para identificar recursos
  * REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar
  * 
  */

const express = require('express');

const routes = require('./routes');

const app = express();


app.use(express.json());
app.use(routes);




app.listen(3333); //porta node


