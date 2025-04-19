"use client";

import { ForecastData, WeatherData } from "@/types/weather";
import { WeatherCard } from "./weather-card";
import { toast } from "sonner";
import { ForecastList } from "./forecast-list";
import { useWeatherStore } from "@/stores/weather-store";
import dayjs from "dayjs";

type Props = {
  forecastData: ForecastData;
  historicData: WeatherData;
  ipAddressError: boolean;
};

export const Overview = (props: Props) => {
  const { forecastData, historicData, ipAddressError } = props;

  const setForecast = useWeatherStore((state) => state.setForecast);
  const setCurrent = useWeatherStore((state) => state.setCurrent);
  const setSelectedDayForOverview = useWeatherStore(
    (state) => state.setSelectedDayForOverview
  );

  setForecast(
    forecastData.forecast.forecastday
      .concat(historicData.forecast.forecastday)
      .sort((a, b) => (a.date > b.date ? 1 : -1))
  );

  setCurrent(forecastData.current);

  setSelectedDayForOverview({
    ...forecastData.current,
    maxtemp_c:
      forecastData.forecast.forecastday.find(
        (day) => day.date === dayjs().format("YYYY-MM-DD")
      )?.day.maxtemp_c || 0,
    mintemp_c:
      forecastData.forecast.forecastday.find(
        (day) => day.date === dayjs().format("YYYY-MM-DD")
      )?.day.mintemp_c || 0,
    date: dayjs().format("YYYY-MM-DD")
  });

  if (ipAddressError) {
    toast(
      "There was an issue getting your location. We are displaying data for our default location"
    );
  }

  return (
    <main className="flex flex-col gap-4 p-4">
      <section>
        <WeatherCard location={forecastData.location} />
      </section>
      <section>
        <ForecastList />
      </section>
    </main>
  );
};
