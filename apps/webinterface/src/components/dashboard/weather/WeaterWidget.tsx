import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters, faWind } from '@fortawesome/free-solid-svg-icons';
import { useWeather } from '../hooks/useWeather';
import { WeatherBox } from './WeatherBox';
import { WeatherLoading } from './WeatherLoading';
import { WeatherNotAvailable } from './WeatherNotAvailable';

function WmoWeatherCodeToText(code: number) {
    switch (code) {
        case 0:
            return 'Clear sky';
        case 1:
            return 'Mainly clear sky';
        case 2:
            return 'Partly cloudy';
        case 3:
            return 'Overcast';
        case 45:
            return 'Fog';
        case 46:
            return 'Rime fog';
        case 51:
            return 'Light drizzle';
        case 53:
            return 'Moderate drizzle';
        case 55:
            return 'Dense drizzle';
        case 56:
            return 'Freezing drizzle';
        case 57:
            return 'Dense freezing drizzle';
        case 61:
            return 'Light rain';
        case 63:
            return 'Moderate rain';
        case 65:
            return 'Dense rain';
        case 71:
            return 'Light snow fall';
        case 73:
            return 'Moderate snow fall';
        case 75:
            return 'Dense snow fall';
        case 77:
            return 'Snow grains';
        case 80:
            return 'Slight rain showers';
        case 81:
            return 'Moderate rain showers';
        case 82:
            return 'Violent rain showers';
        case 85:
            return 'Slight snow showers';
        case 86:
            return 'Heavy snow showers';
        case 95:
            return 'Thunderstorm';
        case 96:
            return 'Thunderstorm with slight hail';
        case 99:
            return 'Thunderstorm with heavy hail';
        default:
            return 'Unknown';
    }
}

export function WeaterWidget() {
    const { data, isLoading, hasPermisson } = useWeather();

    if (hasPermisson === false) {
        return <WeatherNotAvailable />;
    }

    if (isLoading) {
        return <WeatherLoading />;
    }

    return (
        <div className="flex space-x-4 rounded-xl bg-white p-4">
            <div className="flex w-32 flex-col justify-between">
                <div>
                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="text-3xl text-indigo-400" />
                    <span className="text-2xl font-bold text-indigo-400"> Weather</span>
                </div>
                <div className="text-center text-lg font-semibold text-gray-700">
                    {WmoWeatherCodeToText(data?.current_weather.weathercode ?? 0)}
                </div>
            </div>
            <WeatherBox>
                <div className="flex w-24 flex-col space-y-2">
                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="text-4xl text-gray-100" />
                    <div className="rounded-xl">
                        <span className=" block text-center text-4xl font-extrabold text-gray-600">
                            {data?.current_weather?.temperature ?? 0}&deg;
                        </span>
                    </div>
                </div>
            </WeatherBox>
            <WeatherBox>
                <div className="flex w-24 flex-col space-y-4">
                    <FontAwesomeIcon icon={faWind} className="text-center text-4xl text-gray-100" />
                    <div className="rounded-x">
                        <span className=" block text-center text-4xl font-extrabold text-gray-700">
                            {data?.current_weather?.windspeed ?? 0}
                        </span>
                    </div>
                </div>
            </WeatherBox>
        </div>
    );
}
