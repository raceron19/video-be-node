const assert = require('assert');
const proxyquire = require('proxyquire');
const { moviesMock, MoviesServiceMock } = require('../utils/mocks/moviesMock');
const testServer = require('../utils/testServer');

describe('routes - movies', function() {
    const route = proxyquire('../routes/moviesRouter.js', {
        '../services/moviesService.js': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies' , function() {
        it('should respond with 200 status', function(done) {
            request.get('/api/movies').expect(200, done);
        });

        it('should respond with the list of movies', function(done) {
            request.get('/api/movies').end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                });
                done();
            });
        });
    })
});