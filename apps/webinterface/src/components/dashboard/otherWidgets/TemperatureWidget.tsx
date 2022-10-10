import { useRecoilValue } from 'recoil';
import { actualTemparatureState } from '../../../states/unitStates';
import { DashboardBox } from '../DashboardBox';

export function TemperatureWidget() {
    const currentTemperature = useRecoilValue(actualTemparatureState);
    return (
        <DashboardBox>
            <div className="flex flex-col">
                <span className="text-left text-2xl font-semibold uppercase">Current temperature</span>
                <span className="my-auto text-center text-9xl font-extrabold">{currentTemperature}&deg;</span>
            </div>
        </DashboardBox>
    );
}
