import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { DashboardBox } from "../DashboardBox";






export function WeatherLoading() {
    return (
        <DashboardBox>
            <div className="flex flex-col space-y-4">
                <span className="text-left text-lg font-extrabold uppercase text-indigo-400">
                    <FontAwesomeIcon icon={faSpinner} className="inline" /> Loading weather...
                </span>
            </div>
        </DashboardBox>
    );
}
