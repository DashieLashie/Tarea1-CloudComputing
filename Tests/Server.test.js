const request = require('supertest');
const app = require('../Server');

describe('GET /tasks', () => {
    test('should restpond with 200 status code', async () => {
        const response = await request(app).get('/ping').send();
        console.log(response);
    })
})