import { ControlWidgets } from './controls/ControlWidgets';
import { StatusWidgets } from './otherWidgets/StatusWidgets';
import { Weatherwidgets } from './weather/Weatherwidgets';

export function Dashboard() {
    return (
        <div className="h-screen w-full overflow-hidden bg-blue-100 p-4">
            <div className="flex flex-col gap-3">
                <ControlWidgets />
                <StatusWidgets />
                <Weatherwidgets />
            </div>
        </div>
    );
}
