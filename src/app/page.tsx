"use client"

import { Suspense } from "react";
import { WeatherCard } from "./components/weather-card";
import { useQuery } from "@tanstack/react-query";


export default function App() {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_ACCESS_KEY}&q=London&days=3&aqi=no&alerts=no`


  const { data, isLoading, isPending, isError } = useQuery({
    queryKey: ["forecast"],
    queryFn: () => fetch(url).then((res) => res.json()),
  })

  return (<>
    <header>
      <h1 className="font-inter font-bold text-lg">Weather App</h1>
    </header>
    <nav>
    </nav>
      <main className="">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching data</p>}
        {isPending && <p>Pending...</p>}
        { data && (
          <WeatherCard current={data.current} location={data.location} forecast={data.forecast.forecastday}/>
        )}

      </main>
      </>
  );
}
