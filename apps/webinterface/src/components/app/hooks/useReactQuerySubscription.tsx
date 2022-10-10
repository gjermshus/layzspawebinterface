import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { ReceivedMessagePayload } from '../../../models/ReceivedMessagePayload';
import { CommandMapping, SendCommandPayload } from '../../../models/sendCommand';
import { timeState } from '../../../states/timeStates';
import { unitState } from '../../../states/unitStates';

export function useReactQuerySubscription() {
    const websocket = useRef<WebSocket>();
    const setUnitState = useSetRecoilState(unitState);
    const setTimesState = useSetRecoilState(timeState);

    useEffect(() => {
        websocket.current = new WebSocket('ws://localhost:3101');
        websocket.current.onmessage = (event) => {
            const data: ReceivedMessagePayload = JSON.parse(event.data);

            switch (data.CONTENT) {
                case 'STATES':
                    setUnitState(data);
                    break;
                case 'TIMES':
                    setTimesState(data);
                    break;
            }
        };

        websocket.current.onopen = (event) => {
            console.log('Connected to websocket server');
        };

        websocket.current.onclose = (event) => {
            console.log('Disconnected from websocket server');
        };
    }, [setUnitState, setTimesState]);

    return {
        send: (payload: SendCommandPayload) => {
            const { key, value } = payload;
            const command = CommandMapping[key];
            websocket.current?.send(
                JSON.stringify({
                    CMD: command,
                    VALUE: value,
                    XTIME: Math.floor(Date.now() / 1000),
                    INTERVAL: 0,
                })
            );
        },
    };
}
