const assert = require('assert');
const proxyquire = require('proxyquire');
const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLibMock');
const { moviesMock } = require('../utils/mocks/moviesMock');

describe("services - movies", function() {
    const MoviesService = proxyquire('../services/moviesService.js', {
        '../lib/mongo': MongoLibMock
    });

    const moviesService = new MoviesService();

    describe("when getMovies method is called", async function() {
        it('should call the getall mongoLib method', async function() {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('should return an array of movies', async function() {
            const result = await moviesService.getMovies({});
            const expected = moviesMock;
            assert.deepStrictEqual(result, expected);
        })
    })
});