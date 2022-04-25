const app = require('../app/app')
const request = require("supertest");

describe("Unit test for Express", () => {
    test("Initial path: /", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .expect((res) => {
            console.log(res.text)
            expect(res.text).toBe('Hello world!')
        })
        .end((err, res) => {
          if (err) return done(err);
          return done();
        })
    });

    test("Route GET /launchX: replying with text", (done) => {
        request(app)
            .get("/launchX")
            .expect(200)
            .expect((res) => {
                console.log(res.text)
                expect(res.text).toBe('Bienvenidos a launchx!')
            })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    
})
