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

### Production ready

Have all requirements been met?

- [X]Historic 3 day
- [X]Future 3 day
- [X]Current weather for a location?
- [X]Forecast items are clickable and main view updates
- []Animations / transtions
- [X]Responsive
- [X]Caching
- [?]Well structured commit history

I consider production ready to be that all requirements are covered, the main functionality has code coverage, the code base is strucutred and maintainable, security requirements have been met and the application is deployable.

### API

The api in the sample project now requires a paid subscription to get the forecast and other data needed for the project, so I went with the api from [weatherapi](https://www.weatherapi.com/).
This api offers the neccessary histroical and future forecast for the project requirements and better documentation than other free weather apis like open-meteo.

### Nextjs

Using nextjs with the app router allows us to fetch the data from the api serverside, allowing us to get the user's ip address without having to rely on them to opt into the native geolocation client side.
