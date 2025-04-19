import { DayDetails, Forecast, SelectedDay } from "@/types/weather";
import { create } from "zustand";

interface WeatherStore {
  forecast: Forecast[];
  current: DayDetails | null;
  selectedDayForOverview: SelectedDay | null;
  setForecast: (data: Forecast[]) => void;
  setCurrent: (data: DayDetails) => void;
  setSelectedDayForOverview: (data: SelectedDay) => void;
}

export const useWeatherStore = create<WeatherStore>()((set) => ({
  forecast: [],
  current: null,
  selectedDayForOverview: null,
  setForecast: (data: Forecast[]) => set({ forecast: data }),
  setCurrent: (data: DayDetails) => set({ current: data }),
  setSelectedDayForOverview: (data: SelectedDay) =>
    set({ selectedDayForOverview: data })
}));
