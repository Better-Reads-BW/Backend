const request = require('supertest');
const db = require('../database/dbConfig'.js);
const server = require('../api/server');
const auth = require('../assist/auth/restrict')

const path = '/api/auth';
const user = '/api/users';

describe('GET  /', () => {
     it('should return 200 OK', () => {
      // we return the promise
      return request(server)
        .get('/')
        .expect(200);
    })

    describe(`GET ${user}`, () => {
            it('should return 401 OK', () => {
                return request(server)
                .get(`${user}/all`)
                .expect(401)
            })
        
        it('should return text', done => {
            request(server)
            .get('/')
            .then(res => {
                expect(res.type).toBe('text/html'); // Content-Type
                console.log(res.type)
                done();
            })
        })        
    })
})

describe('authorized route', () => {
    describe('post for registration  & login', () => {
      it('should return 201',  () => { 
        return request(server)
            .post(`${path}/register`)   
            .send({
                username:"Fail", // This test will fail if it is ran twice in one session because the username has to be unique when registering each time.
                password:"test",
                firstName:"Bill",
                lastName:"Paid",
                aboutMe:"I paid you already",
                email:"test@email.com"
             })
            .expect(201);
      });

      it('should not log user in expect 404', async () => {
          await request(server)
          .post(`${path}/login`)
          .send({
            username:"notallowed",
            password:"not"
          })
          .expect(401)
      })
    })
})