import { atom, selector } from 'recoil';
import { IReceivedUnitStates, UnitStates } from '../models/states';

export const unitState = atom<IReceivedUnitStates>({
    key: 'unitState',
    default: {
        UNT: false, // Celsius or Fahrenheit
        TMP: 10, // Current temperature
        VTM: 0, // Virtual temperature
        TGT: 0, // Target temperature
        AIR: false, // Air bubbles on or off
        FLT: false, // Filter on or off
        HJT: false, // Hydrojets on or off
        RED: false, // Red on or off - Target temperature not reached yet
        GRN: false, // Green on or off - Target temperature reached
        TIME: 0, // Current time
        LCK: 0, // Lock status
        PWR: 0, // Power status
        CH1: 0,
        CH2: 0,
        CH3: 0,
        JET: 0, // Jet status
        ERR: 0, // Error status
        GOD: false, // God mode
    },
});

export const actualTemparatureState = selector({
    key: UnitStates.ActualTemperature,
    get: ({ get }) => get(unitState).TMP,
});

export const virtualTemparatureState = selector({
    key: UnitStates.VirtualTemperature,
    get: ({ get }) => get(unitState).VTM,
});

export const targetTemparatureState = selector({
    key: UnitStates.TargetTemperature,
    get: ({ get }) => get(unitState).TGT,
});

export const airBubblesState = selector({
    key: UnitStates.AirBubbles,
    get: ({ get }) => get(unitState).AIR,
    set: ({ set, get }, newValue) => set(unitState, { ...get(unitState), AIR: newValue as boolean }),
});

export const filterState = selector({
    key: UnitStates.Filter,
    get: ({ get }) => get(unitState).FLT,
    set: ({ set, get }, newValue) => set(unitState, { ...get(unitState), FLT: newValue as boolean }),
});

export const hydrojetsState = selector({
    key: UnitStates.Hydrojets,
    get: ({ get }) => get(unitState).HJT,
    set: ({ set, get }, newValue) => set(unitState, { ...get(unitState), HJT: newValue as boolean }),
});

export const celsiusState = selector({
    key: UnitStates.UnitCelcius,
    get: ({ get }) => get(unitState).UNT,
    set: ({ set, get }, newValue) => set(unitState, { ...get(unitState), UNT: newValue as boolean }),
});