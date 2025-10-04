const request = require('supertest');
const {expect} = require ('chai');
require('dotenv').config();
console.log("BASE_URL:", process.env.BASE_URL);
const postLogin = require ('../fixtures/postLogin.json');

describe('Login', () => {
   describe('POST /login', () => {
      it('should return 200 OK for valid credentials', async () => {
         const bodyLogin = {...postLogin}
         const response = await request(process.env.BASE_URL)

            .post('/login')
            .set('Content-Type', 'application/json')
            .send(bodyLogin);

            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('token');
            expect(response.body.token).to.be.a('string');
         });
      });
   });