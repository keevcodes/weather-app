
const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = process.env.API_ACCESS_KEY;

export const getWeatherData = {
    get3DayForecast: async (location: string) => {
        const data = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=3&aqi=no&alerts=no`);
    
        return await data.json()
    },
    get3dayHistoric: async (location: string, startDate: string, endDate: string) => {
        const data = await fetch(`${BASE_URL}/history.json?key=${API_KEY}&q=${location}&dt=${startDate}&end_dt=${endDate}&aqi=no&alerts=no`);
        return await data.json()
    }
}
