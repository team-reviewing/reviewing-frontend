import { rest } from 'msw';
import { IUserUpdateType } from '../components/UserInformation/informationType';
import {
  categoriesMockData,
  reviewDatailData,
  reviewerDetailInformationData,
  reviewersData,
  reviewsData,
  userData,
} from './mockApiData';

export const handlers = [
  rest.get('http://localhost:3000/members/me', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userData));
  }),

  rest.get('http://localhost:3000/members/me/reviewer', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(reviewerDetailInformationData));
  }),

  rest.patch('http://localhost:3000/members/me', async (req, res, ctx) => {
    const request: IUserUpdateType = await req.json();
    userData.username = request.username;
    userData.email = request.email;
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
    return res(ctx.status(204));
  }),

  rest.post(`http://localhost:3000/reviewers/:reviewerId/reviews`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('http://localhost:3000/reviewers/:reviewerId/reviews/:reviewId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(reviewDatailData));
  }),

  rest.patch('http://localhost:3000/reviewers/:reviewerId/reviews/:reviewId', (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('http://localhost:3000/tags', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        categories: categoriesMockData,
      }),
    );
  }),

  rest.get('http://localhost:3000/reviewers', (req, res, ctx) => {
    console.log('리뷰어 get 요청이 들어왔습니다');
    console.log('Request query parameters:', req.url.searchParams.toString());
    return res(ctx.status(200), ctx.delay(1000), ctx.json(reviewersData));
  }),

  rest.get('http://localhost:3000/reviews', (req, res, ctx) => {
    const role = req.url.searchParams.get('role');
    const status = req.url.searchParams.get('status');

    if (role === 'reviewee') {
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json({
          reviews: reviewsData.filter((v) => {
            if (status) return v.status === status;
            return v;
          }),
        }),
      );
    } else if (role === 'reviewer') {
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json({
          reviews: reviewsData.filter((v) => {
            if (status) return v.status === status;
            return v;
          }),
        }),
      );
    } else {
      return res(ctx.status(400));
    }
  }),

  rest.patch('http://localhost:3000/reviewers/:reviewerId/reviews/:reviewId/status-accepted', (req, res, ctx) => {
    return res(ctx.status(204));
  }),

  rest.patch('http://localhost:3000/reviewers/:reviewerId/reviews/:reviewId/status-refused', (req, res, ctx) => {
    return res(ctx.status(204));
  }),

  rest.patch('http://localhost:3000/reviewers/:reviewerId/reviews/:reviewId/status-approved', (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
