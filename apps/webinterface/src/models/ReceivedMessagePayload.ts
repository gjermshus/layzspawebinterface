import { IReceivedSettings, IReceivedTimerStates, IReceivedUnitStates } from "./states";


export type ReceivedMessagePayload = ({
    CONTENT: 'SETTINGS';
} & IReceivedSettings) |
    ({
        CONTENT: 'TIMES';
    } & IReceivedTimerStates) |
    ({
        CONTENT: 'STATES';
    } & IReceivedUnitStates);
