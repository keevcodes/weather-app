import { extend } from "dayjs";

export interface DayDetails {
  feelslike_c: number;
  feelslike_f: number;
  temp_c: number;
  humidity: number;
  condition: { text: string; icon: string };
  wind_kph: number;
  wind_dir: string;
  wind_mph: number;
  maxtemp_c: number;
  maxtemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avghumidity?: number;
  daily_chance_of_rain?: number;
}

export interface Current extends DayDetails {
  date: string;
}

export type Location = {
  name: string;
  country: string;
  region: string;
  localtime: string;
};

export type Forecast = {
  date: string;
  day: DayDetails;
  astro: {
    sunrise: string;
    sunset: string;
  };
};

export interface WeatherData {
  forecast: { forecastday: Forecast[] };
  location: Location;
}

export interface ForecastData extends WeatherData {
  current: DayDetails;
}
