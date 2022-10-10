import { ControlWidget } from './ControlWidget';
import { HydroJetsControl } from './HydroJetsControl';
import { BubblesControl } from './BubblesControl';

export function ControlWidgets() {
    return (
        <div className="flex w-full justify-around gap-4">
            <BubblesControl />
            <HydroJetsControl />
            <ControlWidget label="Heater" />
            <ControlWidget label="Pump" active={true} />
        </div>
    );
}
