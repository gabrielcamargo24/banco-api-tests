const request = require('supertest');
const {expect} = require ('chai');
require('dotenv').config();
const {obterToken} = require ('../helpers/autenticacao.js');

describe('Transferencias', () => {
   describe('POST /transferencias', () => {
    let token   
    
    beforeEach(async () => {
             token = await obterToken('julio.lima', '123456');
        })

      it('should return 201 OK para tranferencias igual ou maior que 10,00', async () => {
        
      
        const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                contaOrigem: 4,
                contaDestino: 5,
                valor: 11,
                token:""
                    });
            expect(response.status).to.equal(201);
            console.log(response.body);
              });

     it('should return 422 quando for transferencias menores que 10,00', async () => {
        
        const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                contaOrigem: 4,
                contaDestino: 5,
                valor: 5,
                token:""
                    });
            expect(response.status).to.equal(422);
              });

           });
        });