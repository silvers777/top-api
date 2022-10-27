import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { disconnect } from 'mongoose';
import { AuthDto } from '../src/auth/dto/auth.dto';

const loginDto: AuthDto = {
  login: 'a@a.ru',
  password: '1',
};

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST) - success', async (): Promise<void> => {
    const { body } = await request(app.getHttpServer())
      .post('/auth/login')
      .send(loginDto)
      .expect(200);

    expect(body.access_token).toBeDefined();
  });

  // it('/auth/login (POST) - fail password', async (): Promise<void> => {
  //   await request(app.getHttpServer())
  //     .post('/auth/login')
  //     .send({ ...loginDto, password: '2' })
  //     .expect(401, {
  //       statusCode: 401,
  //       message: 'Password invalid',
  //       error: 'Unauthorized',
  //     });
  // });

  // it('/auth/login (POST) - fail login', async (): Promise<void> => {
  //   await request(app.getHttpServer())
  //     .post('/auth/login')
  //     .send({ ...loginDto, login: 'dasd@dsada.ru' })
  //     .expect(401, {
  //       statusCode: 401,
  //       message: 'User such email is not found',
  //       error: 'Unauthorized',
  //     });
  // });

  afterAll(() => {
    disconnect();
  });
});
