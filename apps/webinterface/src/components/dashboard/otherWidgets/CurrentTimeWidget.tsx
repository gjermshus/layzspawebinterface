import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { DashboardBox } from "../DashboardBox";

export function CurrentTimeWidget() {
    const currentTime = new Date();
    return (
        <DashboardBox>
            <div className="flex flex-col space-y-2">
                <span className="text-left text-lg font-extrabold uppercase text-indigo-400">
                    <FontAwesomeIcon icon={faClock} className="inline" /> Current Time
                </span>
                <span className="text-center text-5xl font-extrabold">{format(currentTime, 'HH:mm')}</span>
                <span className="text-center text-xl font-extrabold">{format(currentTime, 'EEE, dd MMM')}</span>
            </div>
        </DashboardBox>
    );
}
