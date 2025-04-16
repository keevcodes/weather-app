This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Decisions 

### API 
The api in the sample project now requires a paid subscription to get the forecast and other data needed for the project, so I went with the api from [weatherstack](https://weatherstack.com).
This api offers the neccessary histroical and future forecast for the project requirements and better documentation than other free weather apis like open-meteo. 

### Tanstack Query
Tanstack Query removes the need to setting up a bunch of state to handle the data fetching which gets messsy quickly as code bases grow. Error handling and loading states as well out of the box. 
