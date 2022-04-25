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
    
    test("Route GET /explorersInNode: replying with object", (done) => {
        request(app)
            .get("/explorersInNode")
            .expect(200)
            .expect((res) => {
                const explorer = JSON.parse(res.text);
                
                console.log(explorer);

                expect(explorer.name).toBe('Explorer')
                expect(explorer.msg).toBe('Hello')
            })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    })

    test("Route GET /explorer/:explorerName: query params", (done) => {
        request(app)
            .get("/explorer/paulinaom/23")
            .expect(200)
            .expect((res) => {
                const params = JSON.parse(res.text);
                
                console.log(params);

                expect(params.explorerName).toBe('paulinaom')
                expect(params.explorerAge).toBe("23")
            })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    })
})
