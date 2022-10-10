import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { DashboardBox } from "../DashboardBox";






export function WeatherNotAvailable() {
    return (
        <DashboardBox>
            <div className="flex flex-col space-y-4">
                <span className="text-left text-lg font-extrabold uppercase text-indigo-400">
                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="inline" /> Weather
                </span>

                <span className="text-center text-xl font-extrabold">Need location permisson to load weather data</span>
            </div>
        </DashboardBox>
    );
}
