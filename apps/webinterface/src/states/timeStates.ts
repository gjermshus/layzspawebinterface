import { atom, selector } from 'recoil';
import { IReceivedTimerStates, TimerStates } from '../models/states';

const currentTime = new Date();
const chlorinetime = new Date(currentTime.getTime()).setDate(Math.floor(Math.random() * currentTime.getDate()));
const filterTime = new Date(currentTime.getTime()).setDate(Math.floor(Math.random() * currentTime.getDate()));


export const timeState = atom<IReceivedTimerStates>({
    key: 'timerState',
    default: {
        TIME: currentTime.getTime() / 1000, // Current Unix timestamp
        CLTIME: chlorinetime, // Unix timestamp when last chlorine addition
        FTTIME: filterTime, // Unix timestamp when last filter change
        HEATINGTIME: 0, // Unix timestamp when heater turned on
        UPTIME: 0, // Unit uptime in seconds
        PUMPTIME: 0, // Pump uptime in seconds
        AIRTIME: 0, // Unit airtime in seconds
        JETTIME: 0, // Unit jettime in seconds
        COST: 0, // Current cost
        FINT: 0, // Filter interval in days
        CLINT: 0, // Chlorine interval in days
        KWH: 0, // Current KWH
        TTTT: 0, // Total time in seconds
        T2R: 0, // Time to reach target temperature in seconds
        MINCLK: 0, // Minimum chlorine level in ppm
    },
});

export const lastChlorineAddition = selector({
    key: TimerStates.LastChlorineAddition,
    get: ({ get }) => get(timeState).CLTIME,
});

export const lastFilterChange = selector({
    key: TimerStates.LastFilterChange,
    get: ({ get }) => get(timeState).FTTIME,
});
