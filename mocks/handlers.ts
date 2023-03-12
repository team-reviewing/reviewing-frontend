import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:3000/auth/login/github', (req, res, ctx) => {
    console.log(req.body);
    return res(
      ctx.status(200),
      ctx.cookie('refresh_token', 'REFRESH_TOKEN'),
      ctx.json({
        access_token: 'ACCESS_TOKEN',
      }),
    );
  }),

  rest.get('http://localhost:3000/members', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        image_url: 'image.png',
      }),
    );
  }),

  rest.post('http://localhost:3000/auth/refresh', (req, res, ctx) => {
    console.log('access token 만료시 refresh API');
    return res(
      ctx.status(200),
      ctx.cookie('refresh_token', 'REFRESH_TOKEN'),
      ctx.json({
        access_token: 'ACCESS_TOKEN_NEW',
      }),
    );
  }),

  rest.delete('http://localhost:3000/auth/logout', (req, res, ctx) => {
    console.log('logout');
    return res(
      ctx.status(204),
      ctx.json({
        message: 'logout',
      }),
    );
  }),
];
