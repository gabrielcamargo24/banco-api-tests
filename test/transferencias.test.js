const request = require('supertest');
const {expect} = require ('chai');

describe('Transferencias', () => {
   describe('POST /transferencias', () => {
      it('should return 201 OK para tranferencias igual ou maior que 10,00', async () => {
        const responseLogin = await request('http://localhost:3000')
            .post('/login')
            .set('Content-Type', 'application/json')
            .send({ username: 'julio.lima', senha: '123456' });

        const token = responseLogin.body.token
        
        const response = await request('http://localhost:3000')
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                contaOrigem: 1,
                contaDestino: 2,
                valor: 11,
                token:""
                    });
            expect(response.status).to.equal(404);
            console.log(response.body);
              });

     it('should return 422 quando for transferencias menores que 10,00', async () => {
        const responseLogin = await request('http://localhost:3000')
            .post('/login')
            .set('Content-Type', 'application/json')
            .send({ username: 'julio.lima', senha: '123456' });

        const token = responseLogin.body.token
        
        const response = await request('http://localhost:3000')
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                contaOrigem: 1,
                contaDestino: 2,
                valor: 5,
                token:""
                    });
            expect(response.status).to.equal(422);
              });

           });
        });