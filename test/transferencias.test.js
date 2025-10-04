const request = require('supertest');
const {expect} = require ('chai');
require('dotenv').config();
const {obterToken} = require ('../helpers/autenticacao.js');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferencias', () => {
        let token;    
    beforeEach(async () => {
             token = await obterToken('julio.lima', '123456');
        })
   describe('POST /transferencias', () => {
          it('should return 201 OK para tranferencias igual ou maior que 10,00', async () => {
        const bodyTransferencia = {...postTransferencias}
        const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencia);
            expect(response.status).to.equal(201);
              });

     it('should return 422 quando for transferencias menores que 10,00', async () => {
        const bodyTransferencia = {...postTransferencias}
        bodyTransferencia.valor = 7;
        const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencia);
            expect(response.status).to.equal(422);
              });

           });
    describe('GET /transferencias/{id}', () => {
        it ('should return 200 OK e listar os dados igual ao registro de transferencia igual ao contido no banco de dados quando o registro for válido', async () => {
            const response = await request(process.env.BASE_URL)
            .get('/transferencias/4')
            .set('Authorization', `Bearer ${token}`)

            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(4)
            expect(response.body.id).to.be.a('number')
            expect(response.body.conta_origem_id).to.equal(4)
            expect(response.body.conta_destino_id).to.equal(5)
            expect(response.body.valor).to.equal(11.00) //no swagger deveria ser um float mas está como string
            expect(response.body.valor).to.be.a('number'); 
            
        })
    })
    describe ('GET /transferencias', () => {
        it ('Deve retornar 10 elementos na paginação quando informar o limite de 10 registros', async () => {
            const response = await request(process.env.BASE_URL)
            .get('/transferencias?page=1&limit=10')
            .set('Authorization', `Bearer ${token}`);
            
            expect(response.status).to.equal(200);
            expect (response.body.limit).to.equal(10);
            expect (response.body.transferencias).to.have.lengthOf(10);
        })
    })
 })        