import { Current, Forecast } from "@/types/weather";
import { create } from "zustand";

interface WeatherStore {
  forecast: Forecast[];
  current: Current | null;
  setForecast: (data: Forecast[]) => void;
  setCurrent: (data: Current) => void;
}

export const useWeatherStore = create<WeatherStore>()((set) => ({
  forecast: [],
  current: null,
  setForecast: (data: Forecast[]) => set({ forecast: data }),
  setCurrent: (data: Current) => set({ current: data })
}));
