import { rest } from 'msw';
import { IUserUpdateType } from '../components/userInfomation/informationType';

let username = 'kuku';
let email = 'kuku@gmail.com';

export const handlers = [
  rest.get('http://localhost:3000/members/me', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: username,
        email: email,
        imageUrl: 'image',
        profileUrl: 'https://github@url.com/kukus',
        isReviewer: false,
      }),
    );
  }),
  rest.get('http://localhost:3000/members/me/reviewer', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        job: '프론트엔드',
        career: '주니어(1~3년)',
        techStack: [
          { id: 1, skill: 'React' },
          { id: 3, skill: 'Spring' },
        ],
        introduce: '저는 3년차 개발자입니다.',
        positionList: ['프론트엔드', '백엔드', '모바일', '기타'],
        careerList: ['신입(1년이하)', '주니어(1~3년)', '미들(4~8년)', '시니어(9년이상)'],
        techList: [
          { id: 1, skill: 'React' },
          { id: 2, skill: 'SpringBoot' },
          { id: 3, skill: 'Spring' },
          { id: 4, skill: 'View' },
        ],
      }),
    );
  }),
  rest.patch('http://localhost:3000/members/me', async (req, res, ctx) => {
    const request: IUserUpdateType = await req.json();
    username = request.username;
    email = request.email;
    return res(ctx.status(204));
  }),
  rest.post('http://localhost:3000/members/me/reviewer', async (req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.patch('http://localhost:3000/members/me/reviewer', async (req, res, ctx) => {
    return res(ctx.status(204));
  }),
  rest.patch('http://localhost:3000/members/me/reviewer-status', async (req, res, ctx) => {
    return res(ctx.status(204));
  }),
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
