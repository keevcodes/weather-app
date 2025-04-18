"use client";

import { useWeatherStore } from "@/stores/weather-store";
import { Current } from "@/types/weather";
import dayjs from "dayjs";
import Image from "next/image";

export const ForecastList = () => {
  const forecast = useWeatherStore((state) => state.forecast);
  const setCurrent = useWeatherStore((state) => state.setCurrent);

  const handleSeeWeatherDetails = (day: Current) => {
    setCurrent(day);
  };

  console.log({ forecast });

  return (
    <div className="w-full bg-slate-500/75 rounded-lg p-4 shadow-lg">
      <ul className="flex flex-col w-full">
        {forecast.map(({ day, date }, index) => (
          <li
            key={date}
            className={` p-4 text-white ${
              index < forecast.length - 1 ? "border-b border-white" : ""
            }`}
          >
            <button
              className="w-full flex justify-between items-center cursor-pointer"
              onClick={() => handleSeeWeatherDetails({ ...day, date })}
            >
              <div className="flex flex-col">
                <span className="text-md font-inter">
                  {dayjs(date).format("dddd")}
                </span>
                <span className="text-xs text-muted-foreground font-inter text-white/40">
                  {dayjs(date).format("DD/MM/YYYY")}
                </span>
              </div>

              <div className="flex items-center gap-4 lg:gap-8 lg:min-w-[175]">
                <Image
                  src={`https:${day.condition.icon}`}
                  alt={`${day.condition.text} weather icon`}
                  width={25}
                  height={25}
                />
                <div className="flex flex-col sm:gap-1 lg:gap-2 lg:flex-row">
                  <span className="font-medium text-sm text-white/80">
                    L: {day.mintemp_c}°
                  </span>
                  <span className="font-medium text-sm text-white/80">
                    H: {day.maxtemp_c}°
                  </span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
