import { getWeatherData } from "@/lib/get-weather-data";
import dayjs from "dayjs";

describe('getWeatherData methods', () => {
test('returns an array of that includes three forecast days when given a location', async () => {
    
    const result = await getWeatherData.get3DayForecast('-33.3013,26.5325');

    expect(Array.isArray(result.forecast.forecastday)).toBe(true);
    expect(result.forecast.forecastday.length).toBe(3);

    result.forecast.forecastday.forEach((day: any) => {
        expect.objectContaining({
            date: expect.any(String),
            day: expect.objectContaining({
                maxtemp_c: expect.any(Number),
                maxtemp_f: expect.any(Number),
                mintemp_c: expect.any(Number),
                mintemp_f: expect.any(Number),
                avgtemp_c: expect.any(Number),
                maxwind_kph: expect.any(Number),
                totalprecip_mm: expect.any(Number),
                avghumidity: expect.any(Number),
                condition: expect.objectContaining({
                    text: expect.any(String),
                    icon: expect.any(String)
                })
            })
        })
    })

    })

    test('returns an array of that includes three historic days when given a location, start and end date', async () => {
      const histDate1 = dayjs().subtract(1, "day").format("YYYY-MM-DD")
      const histDate3 = dayjs().subtract(3, "day").format("YYYY-MM-DD")
    const result = await getWeatherData.get3dayHistoric('-33.3013,26.5325', histDate3, histDate1);

    expect(Array.isArray(result.forecast.forecastday)).toBe(true);
    expect(result.forecast.forecastday.length).toBe(3);

    result.forecast.forecastday.forEach((day: any) => {
        expect.objectContaining({
            date: expect.any(String),
            day: expect.objectContaining({
                maxtemp_c: expect.any(Number),
                maxtemp_f: expect.any(Number),
                mintemp_c: expect.any(Number),
                mintemp_f: expect.any(Number),
                avgtemp_c: expect.any(Number),
                maxwind_kph: expect.any(Number),
                totalprecip_mm: expect.any(Number),
                avghumidity: expect.any(Number),
                condition: expect.objectContaining({
                    text: expect.any(String),
                    icon: expect.any(String)
                })
            })
        })
    })

    })
})