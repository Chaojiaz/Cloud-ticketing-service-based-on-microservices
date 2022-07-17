import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'ewrwee',
      password: 'password'
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'p'
    })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  //await the first one test completed, and then return the next test.
  await request(app)
    .post('/api/users/signup')
    .send({
      email: "test@test.com"
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      password: "password"
    })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: "test@test.com",
      password: "password"
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: "test@test.com",
      password: "password"
    })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: "test@test.com",
      password: "password"
    })
    .expect(201);
    
  // When we use supertest, we are not use https connection.
  // we are use plain http request
  expect(response.get('Set-Cookie')).toBeDefined();
});