// routes.post('/users1', (request, response) => {
//     const body = request.body;

//     console.log(body);
    
//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Tonhão',
//         Mensagem: 'Hello Word!'
//     });
// });

// routes.get('/users2', (request, response) => {
//     const params = request.query;

//     console.log(params);

//     // return response.send('Hello Word!');
//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Tonhão',
//         Mensagem: 'Hello Word!'
//     });
// }); //API raiz


const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
});

routes.post('/ongs', async (request, response) => {

});


module.exports = routes;


