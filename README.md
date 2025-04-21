## Prod url

https://weather-app-ce2y.vercel.app/

## Getting Started

After cloning the repo, install the dependencies

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

To run unit tests

```bash
npm run test
```

To run e2e tests

```bash
npm run test:e2e
```

## Decisions

### Testing

Jest is used for unit testing the core functionality of fetching the data and error handling. I don't usually shoot for 100% code coverage because this can be quite the undertaking in larger code bases and can slow the team down, usually making sure you cover the really important business logic is enough to give confidence.

I used playwright to setup an e2e test to give confidence that core elements of the application are rendered given the Grahamstown, South Africa location fallback on local host. These tests make sure that the location is displayed, along with the weather hightlight elements and that the forecast section renders 7 items. This also given enough confidence that the application is still displaying the necessary elements to the user.

### API

The api in the sample project now requires a paid subscription to get the forecast and other data needed for the project, so I went with the api from [weatherapi](https://www.weatherapi.com/).
This api offers the neccessary histroical and future forecast for the project requirements and better documentation than other free weather apis like open-meteo.

### Maxmind

Instead of having the requirement of the user to opt-into using geolocation on the client with the gelocation api, I opted into using geolite from maxmind to get the user's location information from their ipaddress, which can then be used with the weather api. This gives the user a nice experience in that the weather app just works for their location, but comes with the trade off that we need a third party tool and an account with Maxmind. For hobby projects this is free, but if this were to be used commerically the liscense fees would obviously need to be considered. I've also noticed that the location accuracy can be off by quite a large degree, which I beleive is also coming from the free version of maxmind here.

### Nextjs

I went with Nextjs as I'm most familiar with it, but Next also offers the headers function next/headers that makes it easy to get the user's ipaddress with is used with geolite. The downside here is that Nextjs projects are becoming more and more vendor locked in with Vercel.

### State management

I used zustand for the state management since it's really simple enough to get setup and easier to keep clean in my opinion vs. something like react context which in my experience starts off simple enough, but can become unruly in larger features with lots of state. Context would be fine enough for now since there's not much state in the current project, but
production ready for me also includes maintability and scalabliy kept in mind.
