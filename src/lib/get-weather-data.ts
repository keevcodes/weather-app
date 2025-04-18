import dayjs from "dayjs";

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = process.env.API_ACCESS_KEY;

export const getWeatherData = {
  get3DayForecast: async (location: string) => {
    const data = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=4&aqi=no&alerts=no`
    );

    return await data.json();
  },
  get3dayHistoric: async (location: string) => {
    const histDate1 = dayjs().subtract(1, "day").format("YYYY-MM-DD");
    const histDate3 = dayjs().subtract(3, "day").format("YYYY-MM-DD");
    const data = await fetch(
      `${BASE_URL}/history.json?key=${API_KEY}&q=${location}&dt=${histDate3}&end_dt=${histDate1}&aqi=no&alerts=no`
    );
    return await data.json();
  }
};
