import { ControlSection } from './ControlSection';
import { TemperatureSection } from './TemperatureSection';
import { TimerSection } from './TimerSection';
import { TotalsSection } from './TotalsSection';



export function Home() {
    return (
        <div className="flex flex-col space-y-2 m-2">
            <TemperatureSection />
            <ControlSection />
            <TimerSection />
            <TotalsSection />
        </div>
    );
}
