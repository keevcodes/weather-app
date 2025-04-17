
import { Suspense } from "react";
import { WeatherCard } from "./components/weather-card";
import { HistoricList } from "./components/historic-list";
import { headers } from "next/headers";
import { WebServiceClient } from "@maxmind/geoip2-node";
import { getWeatherData } from "@/lib/get-weather-data";
import dayjs from "dayjs";

const client = new WebServiceClient(process.env.MAXMIND_ACCOUNT_ID!, process.env.MAXMIND_LISCENSE_KEY!, {host: 'geolite.info'});

async function getWeatherDataForUserLocation() {
  let ipAddress = await (await headers()).get('x-forwarded-for');
  const histDate1 = dayjs().subtract(1, "day").format("YYYY-MM-DD")
  const histDate3 = dayjs().subtract(3, "day").format("YYYY-MM-DD")

  if (!ipAddress || ipAddress === '::1') {
    console.error("either no ip address found or localhost", ipAddress);
    ipAddress = '196.21.247.1'
  }

  const city = await client.city(ipAddress);
  let latitude = city?.location?.latitude;
  let longitude = city?.location?.longitude;

  if (!city) {
    console.error("City not found for IP address", ipAddress);
    // Grahamstown, South Africa latitude and longitude
    latitude = -33.3013;
    longitude = 26.5325;
  }

  const forecastData = await getWeatherData.get3DayForecast(`${latitude},${longitude}`);
  const historicData = await getWeatherData.get3dayHistoric(`${latitude},${longitude}`, histDate3, histDate1);

  return {
    forecastData,
    historicData
  };
}

export default async function App() {
  const {forecastData, historicData } = await getWeatherDataForUserLocation()


  return (<>
    <header>
      <h1 className="font-inter font-bold text-lg">Weather App</h1>
    </header>
    <nav>
    </nav>
      <main className="">
        { forecastData && (
          <WeatherCard current={forecastData.current} location={forecastData.location} forecast={forecastData.forecast.forecastday}/>
        )}

        <Suspense fallback={<p>Loading historic data...</p>}>
          <HistoricList />
        </Suspense>
      </main>
      </>
  );
}
