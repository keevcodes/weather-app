import { headers } from "next/headers";
import { getWeatherData } from "@/lib/get-weather-data";
import { ForecastData, WeatherData } from "@/types/weather";
import { getUserLocationCoordinates } from "@/lib/get-user-location";
import { Overview } from "@/components/overview";

async function getUserIpAddressFromHeaders(): Promise<{
  ipAddress: string;
  error: boolean;
}> {
  const ipAddress = await (await headers()).get("x-forwarded-for");

  if (!ipAddress || ipAddress === "::1") {
    console.error("either no ip address found or localhost", ipAddress);
    return {
      error: true,
      ipAddress: "196.21.247.1"
    };
  }

  return {
    error: false,
    ipAddress
  };
}

export default async function App() {
  const { ipAddress, error } = await getUserIpAddressFromHeaders();
  const { longitude, latitude } = await getUserLocationCoordinates(ipAddress);
  const forecastData: ForecastData = await getWeatherData.get3DayForecast(
    `${latitude},${longitude}`
  );
  const historicData: WeatherData = await getWeatherData.get3dayHistoric(
    `${latitude},${longitude}`
  );

  return (
    <>
      <nav></nav>
      <Overview
        forecastData={forecastData}
        historicData={historicData}
        ipAddressError={error}
      />
    </>
  );
}
