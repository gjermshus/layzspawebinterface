import { useRecoilState } from 'recoil';
import { hydrojetsState } from '../../../states/unitStates';
import { ControlWidget } from './ControlWidget';

export function HydroJetsControl() {
    const [hydroJets, setHydroJets] = useRecoilState(hydrojetsState);

    return (
        <ControlWidget
            label="Hydrojets"
            active={hydroJets}
            onClick={(newState) => {
                setHydroJets(newState);
            }} />
    );
}
