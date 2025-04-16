"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import dayjs from "dayjs"
import { Droplets, Thermometer, Wind } from "lucide-react"

type CurrentWeather = { 
    feelslike_c: number
    feelslike_f: number
    temp_c: number
    humidity: number
    condition: { text: string}
    wind_kph: number
    wind_dir: string
    wind_mph: number
}

type Location = {
    name: string,
    country: string,
    region: string,
    localtime: string,
}

type Forecast = {
    date: string
    day: {
        maxtemp_c: number
        mintemp_c: number
        avgtemp_c: number
        maxwind_kph: number
        totalprecip_mm: number
        avgvis_km: number
        avghumidity: number
        condition: { text: string }
    }
    astro: {
        sunrise: string
        sunset: string
    }
}

type WeatherCardProps = {
    current: CurrentWeather
    location: Location
    forecast: Forecast[]
}

export const WeatherCard = (props: WeatherCardProps) => {
    const { current, location, forecast } = props


    console.log({ forecast })
 return (

    <Card className="w-full shadow-lg hover:shadow-xl bg-blue-300 transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="flex flex-col items-center ">
      <span className="text-4xl font-bold text-white">{Math.round(current.temp_c)}°C</span>
        <span className="text-white">
          {location.name}, {location.country}
        </span>
      </CardTitle>
      <CardDescription>
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-center justify-center">
        <div className="text-center">
          {/* <div className="flex justify-center mb-2">{getWeatherIcon(weather.weather[0].main)}</div> */}
          <p className="text-lg font-medium capitalize">{current.condition.text}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="flex flex-col items-center">
          <Thermometer className="h-5 w-5 text-orange-500 mb-1" />
          <span className="text-sm text-muted-foreground">Feels like</span>
          <span className="font-medium">{Math.round(current.feelslike_c)}°C</span>
        </div>
        <div className="flex flex-col items-center">
          <Droplets className="h-5 w-5 text-blue-500 mb-1" />
          <span className="text-sm text-muted-foreground text-white">Humidity</span>
          <span className="font-medium text-white">{current.humidity}%</span>
        </div>
        <div className="flex flex-col items-center">
          <Wind className="h-5 w-5 text-slate-500 mb-1" />
          <span className="text-sm text-muted-foreground">Wind</span>
          <span className="font-medium">{Math.round(current.wind_kph)} m/s</span>
        </div>
      </div>
      <div>
        {forecast.map((day, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <span className="text-sm text-muted-foreground text-white">{dayjs(day.date).format('dddd')}</span>
                <div className="flex items-center">
                <span className="font-medium">{Math.round(day.day.maxtemp_c)}°C</span>
                <span className="text-sm text-muted-foreground ml-2">/{Math.round(day.day.mintemp_c)}°C</span>
                </div>
            </div>
        ))}
      </div>
    </CardContent>
    <CardFooter className="text-xs text-muted-foreground">
      Last updated: {new Date().toLocaleTimeString()}
    </CardFooter>
  </Card>

 )
}