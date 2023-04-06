import { rest } from 'msw';
import { IUserUpdateType } from '../components/UserInformation/informationType';
import img from 'styles/images/person.png';

let username = 'kuku';
let email = 'kuku@gmail.com';

const categoriesMockData = [
  {
    id: 1,
    name: '백엔드',
    tags: [
      {
        id: 1,
        name: 'Java',
      },
      {
        id: 2,
        name: 'Spring',
      },
      {
        id: 3,
        name: 'Kotlin',
      },
      {
        id: 4,
        name: 'Python',
      },
    ],
  },
  {
    id: 2,
    name: '프론트엔드',
    tags: [
      {
        id: 5,
        name: 'Javascript',
      },
      {
        id: 6,
        name: 'React',
      },
    ],
  },
  {
    id: 3,
    name: '모바일',
    tags: [
      {
        id: 7,
        name: 'Android',
      },
      {
        id: 8,
        name: 'Ios',
      },
    ],
  },
  {
    id: 4,
    name: '기타',
    tags: [
      {
        id: 9,
        name: 'C++',
      },
      {
        id: 10,
        name: 'C',
      },
    ],
  },
];

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
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        reviewerId: 1,
        title: '코드 리뷰 부탁드립니다!!',
        content: 'Spring 관련 개인 프로젝트를 진행하고 있는데 코드 리뷰를 받고 싶습니다.',
        prUrl: 'https://github.com/name/project/pull/1',
      }),
    );
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
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        hasNext: true,
        reviewers: [
          {
            id: 1,
            username: '1',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/440px-Lenna.png',
            profileUrl: 'https://github.com/leeuihyun',
            job: '백엔드',
            career: '1~3년차',
            techStack: [
              {
                id: 1,
                name: 'Java',
              },
              {
                id: 2,
                name: 'Kotlin',
              },
              {
                id: 3,
                name: 'Python',
              },
            ],
            introduction: '안녕하세요 어떠어떠한 개발자입니다.',
          },
          {
            id: 2,
            username: '2',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/440px-Lenna.png',
            profileUrl: 'https://github.com/leeuihyun',
            job: '백엔드',
            career: '1~3년차',
            techStack: [
              {
                id: 1,
                name: 'Java',
              },
              {
                id: 2,
                name: 'Kotlin',
              },
              {
                id: 3,
                name: 'Python',
              },
            ],
            introduction: '안녕하세요 어떠어떠한 개발자입니다.',
          },
          {
            id: 3,
            username: '3',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/440px-Lenna.png',
            profileUrl: 'https://github.com/leeuihyun',
            job: '백엔드',
            career: '1~3년차',
            techStack: [
              {
                id: 1,
                name: 'Java',
              },
              {
                id: 2,
                name: 'Kotlin',
              },
              {
                id: 3,
                name: 'Python',
              },
            ],
            introduction: '안녕하세요 어떠어떠한 개발자입니다.',
          },
          {
            id: 4,
            username: '4',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/440px-Lenna.png',
            profileUrl: 'https://github.com/leeuihyun',
            job: '백엔드',
            career: '1~3년차',
            techStack: [
              {
                id: 1,
                name: 'Java',
              },
              {
                id: 2,
                name: 'Kotlin',
              },
              {
                id: 3,
                name: 'Python',
              },
            ],
            introduction: '안녕하세요 어떠어떠한 개발자입니다.',
          },
          {
            id: 5,
            username: '5',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/440px-Lenna.png',
            profileUrl: 'https://github.com/leeuihyun',
            job: '백엔드',
            career: '1~3년차',
            techStack: [
              {
                id: 1,
                name: 'Java',
              },
              {
                id: 2,
                name: 'Kotlin',
              },
              {
                id: 3,
                name: 'Python',
              },
            ],
            introduction: '안녕하세요 어떠어떠한 개발자입니다.',
          },
          {
            id: 6,
            username: '6',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/440px-Lenna.png',
            profileUrl: 'https://github.com/leeuihyun',
            job: '백엔드',
            career: '1~3년차',
            techStack: [
              {
                id: 1,
                name: 'Java',
              },
              {
                id: 2,
                name: 'Kotlin',
              },
              {
                id: 3,
                name: 'Python',
              },
            ],
            introduction: '안녕하세요 어떠어떠한 개발자입니다.',
          },
          {
            id: 7,
            username: '7',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/440px-Lenna.png',
            profileUrl: 'https://github.com/leeuihyun',
            job: '백엔드',
            career: '1~3년차',
            techStack: [
              {
                id: 1,
                name: 'Java',
              },
              {
                id: 2,
                name: 'Kotlin',
              },
              {
                id: 3,
                name: 'Python',
              },
            ],
            introduction:
              '안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕하세요 안녕',
          },
          {
            id: 8,
            username: '8',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/440px-Lenna.png',
            profileUrl: 'https://github.com/leeuihyun',
            job: '백엔드',
            career: '1~3년차',
            techStack: [
              {
                id: 1,
                name: 'Java',
              },
              {
                id: 2,
                name: 'Kotlin',
              },
              {
                id: 3,
                name: 'Python',
              },
            ],
            introduction:
              '안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 안녕 ',
          },
          {
            id: 9,
            username: '9',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ko/thumb/2/24/Lenna.png/440px-Lenna.png',
            profileUrl: 'https://github.com/leeuihyun',
            job: '백엔드',
            career: '1~3년차',
            techStack: [
              {
                id: 1,
                name: 'Java',
              },
              {
                id: 2,
                name: 'Kotlin',
              },
              {
                id: 3,
                name: 'Python',
              },
            ],
            introduction: '안녕하세요 어떠어떠한 개발자입니다.',
          },
        ],
      }),
    );
  }),

  rest.get('http://localhost:3000/reviews', (req, res, ctx) => {
    const role = req.url.searchParams.get('role');

    if (role === 'reviewee') {
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json({
          reviews: [
            {
              id: 1,
              title: '요청한 리뷰 리스트 첫번째 목록',
              reviewerId: 1,
              member: {
                id: 1,
                username: '리뷰어 이름 1',
                imageUrl: img,
              },
            },
            {
              id: 2,
              title: '요청한 리뷰 리스트 두번째 목록',
              reviewerId: 2,
              member: {
                id: 2,
                username: '리뷰어 이름 2',
                imageUrl: img,
              },
            },
            {
              id: 3,
              title: '요청한 리뷰 리스트 세번째 목록',
              reviewerId: 3,
              member: {
                id: 3,
                username: '리뷰어 이름 3',
                imageUrl: img,
              },
            },
          ],
        }),
      );
    } else if (role === 'reviewer') {
      return res(
        ctx.status(200),
        ctx.delay(1000),
        ctx.json({
          reviews: [
            {
              id: 1,
              title: '요청받은 리뷰 리스트 첫번째 목록',
              reviewerId: 1,
              member: {
                id: 1,
                username: '리뷰이 이름 1',
                imageUrl: img,
              },
            },
            {
              id: 2,
              title: '요청받은 리뷰 리스트 두번째 목록',
              reviewerId: 1,
              member: {
                id: 2,
                username: '리뷰이 이름 2',
                imageUrl: img,
              },
            },
            {
              id: 3,
              title: '요청받은 리뷰 리스트 세번째 목록',
              reviewerId: 1,
              member: {
                id: 3,
                username: '리뷰이 이름 3',
                imageUrl: img,
              },
            },
          ],
        }),
      );
    } else {
      return res(ctx.status(400));
    }
  }),

  rest.patch('http://localhost:3000/reviewers/:reviewerId/reviews/:reviewId/status', (req, res, ctx) => {
    return res(ctx.status(204));
  }),

  rest.delete('http://localhost:3000/reviewers/:reviewerId/reviews/:reviewId', (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
