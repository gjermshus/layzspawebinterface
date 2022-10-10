import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { airBubblesState } from '../../../states/unitStates';
import { stopwatchElapsedSeconds, stopwatchIsRunning } from '../../../states/stopwatch';
import { ControlWidget } from './ControlWidget';

export function BubblesControl() {
    const [bubbles, setBubbles] = useRecoilState(airBubblesState);
    const setStopwachRunning = useSetRecoilState(stopwatchIsRunning);
    const resetStopWatch = useResetRecoilState(stopwatchElapsedSeconds);

    return (
        <ControlWidget
            label="Bubbles"
            active={bubbles}
            onClick={(newState) => {
                setBubbles(newState);
                if (newState) {
                    resetStopWatch();
                }
                setStopwachRunning(newState);
            }} />
    );
}
