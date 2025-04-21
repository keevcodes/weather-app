"use client";

import { useWeatherStore } from "@/stores/weather-store";
import { SelectedDay } from "@/types/weather";
import dayjs from "dayjs";
import { Calendar } from "lucide-react";
import Image from "next/image";

export const ForecastList = () => {
  const forecast = useWeatherStore((state) => state.forecast);
  const current = useWeatherStore((state) => state.current);
  const setSelectedDayForOverview = useWeatherStore(
    (state) => state.setSelectedDayForOverview
  );

  const handleSeeWeatherDetails = (day: SelectedDay) => {
    if (current && day.date === dayjs().format("YYYY-MM-DD")) {
      setSelectedDayForOverview({
        ...current,
        maxtemp_c: day.maxtemp_c,
        mintemp_c: day.mintemp_c,
        date: day.date
      });
      return;
    }

    setSelectedDayForOverview(day);
  };

  return (
    <div className="w-full bg-slate-500/75 rounded-lg p-4 shadow-lg">
      <div className="flex items-center border-b-1 border-white/50 pb-2">
        <Calendar className="text-white/50 w-4 mr-2" />
        <h4 className="text-white/50 font-inter text-sm">7 Day Forecast</h4>
      </div>
      <ul className="flex flex-col w-full">
        {forecast.map(({ day, date }, index) => (
          <li
            key={date}
            className={` p-4 text-white ${
              index < forecast.length - 1 ? "border-b border-white/50" : ""
            }
            transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md`}
          >
            <button
              className="w-full flex justify-between items-center cursor-pointer"
              onClick={() => handleSeeWeatherDetails({ ...day, date })}
            >
              <div className="flex flex-col">
                <span className="text-md font-inter">
                  {date === dayjs().format("YYYY-MM-DD")
                    ? "Today"
                    : dayjs(date).format("dddd")}
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
                    H: {day.maxtemp_c}°
                  </span>
                  <span className="font-medium text-sm text-white/80">
                    L: {day.mintemp_c}°
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
