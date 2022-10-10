export enum UnitStates {
    ActualTemperature = 'TMP',
    VirtualTemperature = 'VTM',
    TargetTemperature = 'TGT',
    AirBubbles = 'AIR',
    Filter = 'FLT',
    Hydrojets = 'HJT',
    Red = 'RED',
    Green = 'GRN',
    GodMode = 'GOD',
    UnitCelcius = 'UNT',
}

export enum TimerStates {
    CurrentTime = 'TIME',
    LastChlorineAddition = 'CLTIME',
    LastFilterChange = 'FTTIME',
    HeatingTime = 'HEATINGTIME',
    UnitUptime = 'UPTIME',
    PumpUptime = 'PUMPTIME',
    Airtime = 'AIRTIME',
    Jettime = 'JETTIME',
    Cost = 'COST',
    FilterInterval = 'FINT',
    ChlorineInterval = 'CLINT',
    KWH = 'KWH',
    TotalTime = 'TTTT',
    TimeToReachTargetTemperature = 'T2R',
    MinimumChlorineLevel = 'MINCLK',
}

export interface IReceivedUnitStates {
    // Temperatures
    UNT: boolean; // Celsius or Fahrenheit
    TMP: number; // Current temperature
    VTM: number; // Virtual temperature
    TGT: number; // Target temperature

    // Unit functional states
    AIR: boolean; // Air bubbles on or off
    FLT: boolean; // Filter on or off
    HJT: boolean; // Hydrojets on or off

    // Heater status
    RED: boolean; // Red on or off - Target temperature not reached yet
    GRN: boolean; // Green on or off - Target temperature reached

    TIME: number; // Current time
    LCK: number; // Lock status
    PWR: number; // Power status

    CH1: number; 
    CH2: number;
    CH3: number; 
    JET: number; // Jet status
    ERR: number; // Error status
    GOD: boolean; // God mode
}

export interface IReceivedTimerStates {
    TIME: number; // Current Unix timestamp
    CLTIME: number; // Unix timestamp when last chlorine addition
    FTTIME: number; // Unix timestamp when last filter change
    HEATINGTIME: number; // Unix timestamp when heater turned on
    UPTIME: number; // Unit uptime in seconds
    PUMPTIME: number; // Pump uptime in seconds
    AIRTIME: number; // Unit airtime in seconds
    JETTIME: number; // Unit jettime in seconds
    COST: number; // Current cost
    FINT: number; // Filter interval in days
    CLINT: number; // Chlorine interval in days
    KWH: number; // Current KWH
    TTTT: number; // Total time in seconds
    T2R: number; // Time to reach target temperature in seconds
    MINCLK: number; // Minimum chlorine level in ppm
}

export interface IReceivedSettings {
    TIMEZONE: string;
    PRICE: number;
    FINT: number;
    CLINT: number;
    AUDIO: boolean;
    REBOOTINFO: string;
    REBOOTTIME: number;
    RESTORE: boolean;
    MODEL: string;
}
