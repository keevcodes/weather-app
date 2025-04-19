"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useWeatherStore } from "@/stores/weather-store";
import dayjs from "dayjs";
import { CloudRain, Droplets, Thermometer, Wind } from "lucide-react";
import { Location } from "../types/weather";
import { WeatherHighlight } from "./weather-hightlight";

type WeatherCardProps = {
  location: Location;
};

export const WeatherCard = (props: WeatherCardProps) => {
  const { location } = props;
  const selectedDayForOverview = useWeatherStore(
    (state) => state.selectedDayForOverview
  );
  const date = dayjs(selectedDayForOverview?.date).format("dddd, DD/MM/YYYY");

  return (
    <Card className="shadow-lg bg-slate-500/75 hover:shadow-xl transition-shadow duration-300 mt-10 border-none">
      <CardHeader>
        <CardTitle className="flex flex-col items-center ">
          <h3 className="text-lg text-white">
            {location.name}, {location.country}
          </h3>
          <h4 className="text-sm text-white/50 mb-3">{date}</h4>
          <span className="text-4xl font-bold text-white">
            {selectedDayForOverview?.temp_c
              ? `${Math.round(selectedDayForOverview.temp_c)}°C`
              : "--"}
          </span>
        </CardTitle>
        <CardDescription className="text-white text-sm font-inter flex flex-col items-center justify-center gap-1">
          <span className="text-md font-medium capitalize text-white">
            {selectedDayForOverview?.condition.text}
          </span>
          <div className="text-white text-sm font-inter">
            <span className="mr-2">
              H:{" "}
              {selectedDayForOverview?.maxtemp_c
                ? Math.round(selectedDayForOverview.maxtemp_c)
                : "--"}
              °C
            </span>
            &nbsp;
            <span>
              L:{" "}
              {selectedDayForOverview?.mintemp_c
                ? Math.round(selectedDayForOverview?.mintemp_c)
                : "--"}
              °C
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="flex flex-col items-center">
            {selectedDayForOverview?.feelslike_c && (
              <WeatherHighlight
                icon={<Thermometer className="h-5 w-5 text-orange-500 mb-1" />}
                hightlightText="Feels like"
                hightlightValue={`${selectedDayForOverview?.feelslike_c}°C`}
              />
            )}
            {selectedDayForOverview?.daily_chance_of_rain !== undefined && (
              <WeatherHighlight
                icon={<CloudRain className="h-5 w-5 text-slate-400 mb-1" />}
                hightlightText="Chance of rain"
                hightlightValue={`${selectedDayForOverview?.daily_chance_of_rain}%`}
              />
            )}
          </div>
          <div className="flex flex-col items-center">
            <WeatherHighlight
              icon={<Droplets className="h-5 w-5 text-blue-900 mb-1" />}
              hightlightText="Humidity"
              hightlightValue={`${selectedDayForOverview?.humidity || selectedDayForOverview?.avghumidity}%`}
            />
          </div>
          <div className="flex flex-col items-center ">
            <WeatherHighlight
              icon={<Wind className="h-5 w-5 text-slate-900 mb-1" />}
              hightlightText="Wind"
              hightlightValue={`${Math.round(selectedDayForOverview?.wind_kph || 0)} m/s`}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
