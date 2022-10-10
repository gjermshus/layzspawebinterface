export interface WeatherPayload {
    latitude:              number;
    longitude:             number;
    generationtime_ms:     number;
    utc_offset_seconds:    number;
    timezone:              string;
    timezone_abbreviation: string;
    elevation:             number;
    current_weather:       CurrentWeather;
    hourly_units:          HourlyUnits;
    hourly:                Hourly;
}

export interface CurrentWeather {
    temperature:   number;
    windspeed:     number;
    winddirection: number;
    weathercode:   number;
    time:          string;
}

export interface Hourly {
    time:                 string[];
    temperature_2m:       number[];
    relativehumidity_2m:  number[];
    apparent_temperature: number[];
}

export interface HourlyUnits {
    time:                 string;
    temperature_2m:       string;
    relativehumidity_2m:  string;
    apparent_temperature: string;
}
