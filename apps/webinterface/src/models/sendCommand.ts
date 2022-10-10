export enum CommandMapping {
    SetTargetTemperature = 0,
    ToggleUnit = 1,
    ToggleBubbles = 2,
    ToggleHeater = 3,
    TogglePump = 4,
    //resetq = 5,
    RestartESP = 6,
    //gettarget = 7,
    ResetTotals = 8,
    ResetTimerChlorine = 9,
    ResetTimerFilter = 10,
    ToggleHydroJets = 11,
    SetBrightness = 12,
    SetBeep = 13,
    SetAmbient = 14,
}

export type SendCommandPayload = {
    key: CommandMapping;
    value: number | boolean;
};
