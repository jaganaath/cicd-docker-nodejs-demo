const expect = require('chai').expect;
const request = require('request');
const baseUrl = "http://localhost:3000";

describe('root', function() {
    it('root should return hello world', function(done){
        request.get({ url: baseUrl },
            function(error, response, body){
                console.log(body);
                expect(body).to.equal('Hello World');
                done();
            });
    });
});

describe('status', function() {
    it('status should return right value', function(done){
        request.get({ url: baseUrl + '/status/'},
            function(error, response, body){
                expect(response.statusCode).to.equal(200);
                console.log(body);
                done();
            });
    });
});