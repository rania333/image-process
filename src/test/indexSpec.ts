import supertest from 'supertest';
import {app} from '../index';
import { promises as fs } from 'fs';
import path from 'path';
import {createProcessedImage} from '../helper/image'


const request: supertest.SuperTest<supertest.Test> = supertest(app);

describe('Test responses', (): void => {
  describe('endpoint: /', (): void => {
    it('route: /', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/');

      expect(response.status).toBe(404);
    });
  });

  describe('endpoint: /api', (): void => {
    it('route /api?filename=dora&width=200&height=200', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api?filename=dora&width=200&height=200'
      );

      expect(response.status).toBe(200);
    });
    

    it('route /api?filename=dora , no width or height', async (): Promise<void> => {
      const response: supertest.Response = await request.get('/api?filename=dora');

      expect(response.status).toBe(400);
    });
  

    it('route /api?filename=dora2&width=200&height=200 , invalid filename', async (): Promise<void> => {
    const response: supertest.Response = await request.get('/api?filename=dora2&width=200&height=200');

    expect(response.status).toBe(404);
    });
  });

  describe('Test sharp', (): void => {
    it('invalid width', async (): Promise<void> => {
      const error: null | string = await createProcessedImage({
        filename: 'dora',
        width: -100,
        height: 500
      });
      expect(error).not.toBeNull();
    });
  
    it('filename does not exist', async (): Promise<void> => {
      const error: null | string = await createProcessedImage({
        filename: 'dora2',
        width: 100,
        height: 500
      });
      expect(error).not.toBeNull();
    });
  
    it('valid', async (): Promise<void> => {
      const error: null | string = await createProcessedImage({
        filename: 'dora',
        width: 200,
        height: 200
      });
      expect(error).toBeNull();
    });
  });
});

// delete test file
afterAll(async (): Promise<void> => {
  const resizedImagePath: string = path.join(
    __dirname, '../dist/thumb' );

  try {
    await fs.access(resizedImagePath);
    fs.unlink(resizedImagePath);
  } catch {
  }
});
