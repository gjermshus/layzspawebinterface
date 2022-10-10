import { StopwatchWidget } from './StopwatchWidget';
import { CurrentTimeWidget } from './CurrentTimeWidget';
import { TemperatureWidget } from './TemperatureWidget';

export function StatusWidgets() {
    return (
        <div className="flex flex-col justify-evenly space-y-4">
            <div>
                <TemperatureWidget />
            </div>
            <div className="flex justify-between space-x-4">
                <CurrentTimeWidget />
                <StopwatchWidget />
            </div>
        </div>
    );
}
