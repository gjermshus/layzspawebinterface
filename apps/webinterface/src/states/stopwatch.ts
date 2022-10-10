import { atom, selector } from 'recoil';

export const stopwatchState = atom<{ isRunning: boolean; secondsElapsed: number }>({
    key: 'stopwatchtimer',
    default: {
        isRunning: false,
        secondsElapsed: 0,
    },
});

export const stopwatchIsRunning = selector({
    key: 'stopwatchIsRunning',
    get: ({ get }) => get(stopwatchState).isRunning,
    set: ({ get, set }, newState) => set(stopwatchState, { ...get(stopwatchState), isRunning: newState as boolean }),
});

export const stopwatchElapsedSeconds = selector({
    key: 'stopwatchElapsedSeconds',
    get: ({ get }) => {
        const value = get(stopwatchState).secondsElapsed;
        if (typeof value === 'object') {
            // In case of DefaultValue
            return 0;
        }
        return value;
    },
    set: ({ get, set }, newState) => set(stopwatchState, { ...get(stopwatchState), secondsElapsed: newState as number }),
});
