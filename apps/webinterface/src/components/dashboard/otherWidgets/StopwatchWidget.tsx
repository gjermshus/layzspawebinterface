import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addSeconds, format } from 'date-fns';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { stopwatchElapsedSeconds, stopwatchIsRunning } from '../../../states/stopwatch';
import { DashboardBox } from '../DashboardBox';

export function StopwatchWidget() {
    const isRunning = useRecoilValue(stopwatchIsRunning);
    const [secondsElapsed, setSecondsElapsed] = useRecoilState(stopwatchElapsedSeconds);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setSecondsElapsed((prevTime) => prevTime + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isRunning, setSecondsElapsed]);

    return (
        <DashboardBox>
            <div className="flex flex-col space-y-2">
                <span className="text-left text-lg font-extrabold uppercase text-indigo-400">
                    <FontAwesomeIcon icon={faClock} className="inline" /> Buble time
                </span>
                <span className="text-center text-5xl font-extrabold">
                    {isRunning ? format(addSeconds(new Date(0), secondsElapsed), 'mm:ss') : 'Bubbles not running'}
                </span>
            </div>
        </DashboardBox>
    );
}
