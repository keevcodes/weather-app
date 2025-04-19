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
  const current = useWeatherStore((state) => state.current);
  const date = dayjs(current?.date).format("dddd, DD/MM/YYYY");

  return (
    <Card className="shadow-lg bg-slate-500/75 hover:shadow-xl transition-shadow duration-300 mt-10 border-none">
      <CardHeader>
        <CardTitle className="flex flex-col items-center ">
          <h3 className="text-lg text-white">
            {location.name}, {location.country}
          </h3>
          <h4 className="text-sm text-white/50 mb-3">{date}</h4>
          <span className="text-4xl font-bold text-white">
            {current?.temp_c ? `${Math.round(current.temp_c)}°C` : "--"}
          </span>
        </CardTitle>
        <CardDescription className="text-white text-sm font-inter flex flex-col items-center justify-center gap-1">
          <span className="text-md font-medium capitalize text-white">
            {current?.condition.text}
          </span>
          <div className="text-white text-sm font-inter">
            <span className="mr-2">
              H: {current?.maxtemp_c ? Math.round(current.maxtemp_c) : "--"}°C
            </span>
            &nbsp;
            <span>
              L: {current?.mintemp_c ? Math.round(current?.mintemp_c) : "--"}°C
            </span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="flex flex-col items-center">
            {current?.feelslike_c && (
              <WeatherHighlight
                icon={<Thermometer className="h-5 w-5 text-orange-500 mb-1" />}
                hightlightText="Feels like"
                hightlightValue={`${current?.feelslike_c}°C`}
              />
            )}
            {current?.daily_chance_of_rain !== undefined && (
              <WeatherHighlight
                icon={<CloudRain className="h-5 w-5 text-slate-400 mb-1" />}
                hightlightText="Chance of rain"
                hightlightValue={`${current?.daily_chance_of_rain}%`}
              />
            )}
          </div>
          <div className="flex flex-col items-center">
            <WeatherHighlight
              icon={<Droplets className="h-5 w-5 text-blue-900 mb-1" />}
              hightlightText="Humidity"
              hightlightValue={`${current?.humidity || current?.avghumidity}%`}
            />
          </div>
          <div className="flex flex-col items-center">
            <WeatherHighlight
              icon={<Wind className="h-5 w-5 text-slate-900 mb-1" />}
              hightlightText="Wind"
              hightlightValue={`${Math.round(current?.wind_kph || 0)} m/s`}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
