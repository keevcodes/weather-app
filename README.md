This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

first install the dependencies

```bash
npm install
```

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

To run tests

```bash
npm run test
```

## Decisions

### Testing

Jest is used for unit testing the core functionality of fetching the data and error handling. All tests are run before commits with husky. I don't usually shoot for 100% code coverage because this can be quite the undertaking in larger code bases and can slow the team down, usually making sure you cover the really important business logic is enough to give confidence.

### API

The api in the sample project now requires a paid subscription to get the forecast and other data needed for the project, so I went with the api from [weatherapi](https://www.weatherapi.com/).
This api offers the neccessary histroical and future forecast for the project requirements and better documentation than other free weather apis like open-meteo.

### Maxmind

Instead of having the requirement of the user to opt-into using geolocation on the client with the gelocation api, I opted into using geolite from maxmind to get the user's location information from their ipaddress, which can then be used with the weather api. This gives the user a nice experience in that the weather app just works for their location, but comes with the trade off that we need a third party tool and an account with Maxmind. For hobby projects this is free, but if this were to be used commerically the liscense fees would obviously need to be considered.

### Nextjs

I went with Nextjs as I'm most familiar with it, but Next also offers the headers function next/headers that makes it easy to get the user's ipaddress with is used with geolite. The downside here is that Nextjs projects are becoming more and more vendor locked in with Vercel.

### State management

I used zustand for the state management since it's really simple enough to get setup and easier to keep clean in my opinion vs. something like react context which in my experience starts off simple enough, but can become unruly in larger features with lots of state. Context would be fine enough for now since there's not much state in the current project, but
production ready for me also includes maintability and scalabliy kept in mind.
