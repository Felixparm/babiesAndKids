
var app = require("../app")
var request = require("supertest")
var mongoose = require('mongoose');
var users = require('../models/users');

test("Wrongsignup", async (done) => {
await request(app).post("/users/sign-up")
  .send({ "firstName": "felix" ,'lastName':'felix','email':'','password':'testjest'})
  .expect(200)
  .expect({ result: false,saveUser: null,error:['champs vides'] })

done()
})

test("NOKsignin", async (done) => {
    await request(app).post("/users/sign-in")
      .send({ 'email':'jest@ggmail.com','password':'testjest'})
      .expect(200)
      .expect({ result: false,user: null,error:['email incorrect'] })
    done()
    })
    
test("OKsignin", async (done) => {
        await request(app).post("/users/sign-in")
          .send({ 'email':'jest@ok','password':'jestok'})
          .expect(200)
          .expect({
            result: true,
            user: {
              _id: '5ff5f24a5893255cfc3b2091',
              firstName: '',
              lastName: '',
              email: 'jest@ok',
              address: '',
              city: '',
              postalCode: '',
              salt: 'QB7PslO5ufAtZCi3BjbmVdZCfloE69f8',
              moneyWallet: 0,
              password: 'j0c1P5rKhE4viGQhMuJOX480O+gauCrzWDMgBDJXtHQ=',
              token: 'F4wkrboiJ6op9legrFLWUjpXaeb0970J',
              __v: 0
            },
            token: 'F4wkrboiJ6op9legrFLWUjpXaeb0970J',
            error: []
          })
        done()
        })
