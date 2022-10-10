import { useQuery } from 'react-query';
import { WeatherPayload } from '../../../models/weatherPayload';
import { useGeolocation } from './useGeolocation';

export function useWeather() {
    const { geolocation, hasPermisson } = useGeolocation();

    const query = useQuery(
        ['weatherData'],
        async () => {
            if (!hasPermisson || geolocation === null) return;

            const result = await fetch(
                `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${geolocation.coords.latitude}&longitude=${geolocation.coords.longitude}6&hourly=temperature_2m,relativehumidity_2m,apparent_temperature`
            );

            if (result.ok) {
                return result.json() as Promise<WeatherPayload>;
            }
        },
        {
            refetchInterval: 60_000 * 5,
            refetchOnMount: true,
            staleTime: 0,
        }
    );

    return { isLoading: query.isLoading, data: query.data, hasPermisson };
}
