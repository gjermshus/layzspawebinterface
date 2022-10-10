import { useRecoilValue } from 'recoil';
import {
    actualTemparatureState,
    targetTemparatureState,
    virtualTemparatureState,
} from '../../states/unitStates';
import { Section } from '../ui/Section';
import { StatisticsBox } from './StatisticsBox';

function ActualTemperature() {
    const actualTemperature = useRecoilValue(actualTemparatureState);
    return <StatisticsBox description="Actual" value={actualTemperature} />;
}

function VirtualTemperature() {
    const virtualTemperature = useRecoilValue(virtualTemparatureState);
    return <StatisticsBox description="Virtual" value={virtualTemperature} />;
}

function TargetTemperature() {
    const targetTemperature = useRecoilValue(targetTemparatureState);
    return <StatisticsBox description="Target" value={targetTemperature} />;
}

export function TemperatureSection() {
    return (
        <Section name="Temperature">
            <div className="flex justify-between space-x-2">
                <ActualTemperature />
                <VirtualTemperature />
                <TargetTemperature />
            </div>
        </Section>
    );
}
