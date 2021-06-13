import { SetupSever } from '@src/server';
import supertest from 'supertest';

let server: SetupSever;

beforeAll(async() => {
  server = new SetupSever();
  await server.init();
  global.testRequest = supertest(server.getApp());
});

afterAll(async () => await server.close());