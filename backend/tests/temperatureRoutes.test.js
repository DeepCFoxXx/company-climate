const request = require('supertest');
const express = require('express');
const temperatureRoutes = require('../routes/temperatureRoutes');

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

jest.mock('../models/Temperature', () => {
  return function () {
    return {
      save: jest.fn().mockResolvedValue(true),
    };
  };
});

const app = express();
app.use(express.json());
app.use('/api/temperatures', temperatureRoutes);

describe('POST /api/temperatures', () => {
  test('returns the closest value from valid input', async () => {
    const res = await request(app)
      .post('/api/temperatures')
      .send({ values: [-3, 2, -1, 1] });

    expect(res.statusCode).toBe(200);
    expect(res.body.closest).toBe(1);
  });

  test('rejects invalid input (non-array)', async () => {
    const res = await request(app).post('/api/temperatures').send({ values: 'not-an-array' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('rejects invalid input (empty array)', async () => {
    const res = await request(app).post('/api/temperatures').send({ values: [] });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('rejects invalid input (contains strings)', async () => {
    const res = await request(app)
      .post('/api/temperatures')
      .send({ values: [1, 'two', 3] });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  test('handles server error', async () => {
    jest.resetModules();
    jest.mock('../models/Temperature', () => {
      return function () {
        return {
          save: jest.fn().mockRejectedValue(new Error('DB error')),
        };
      };
    });

    const brokenApp = express();
    brokenApp.use(express.json());
    const brokenRoutes = require('../routes/temperatureRoutes');
    brokenApp.use('/api/temperatures', brokenRoutes);

    const res = await request(brokenApp)
      .post('/api/temperatures')
      .send({ values: [1, 2, 3] });

    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('error');
  });
});
