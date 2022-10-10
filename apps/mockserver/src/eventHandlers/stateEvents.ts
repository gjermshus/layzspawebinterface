import { readFileSync,  } from 'fs';

let lastTemperature = 10;
function getRandomTemperature() {
    lastTemperature = Math.floor(Math.random() * 40 + 10);
    return lastTemperature;
}

class Cache {
    private type: string;
    private states: string[];

    constructor(type: string) {
        this.type = type;
        this.states = [];

        
        const content = readFileSync(`./src/eventHandlers/${type}.txt`, { encoding: 'utf-8' });
        this.states = content.split("\n");
    }

    public getRandomState() {
        return this.states[Math.floor(Math.random() * this.states.length)];
    }
}

const statesCache = new Cache('states');
const timesCache = new Cache('times');
const otherCache = new Cache('other');

export function getStateEvents() {
    return statesCache.getRandomState();
}

export function getTimesEvents() {
    return timesCache.getRandomState();
}

export function getOtherEvents() {
    return otherCache.getRandomState();
}

// function getStateEvents(app: AppData, socket) {
//     const doc = {};
//     doc['CONTENT'] = 'STATES';
//     doc['TIME'] = new Date().getTime() / 1000;
//     doc['LCK'] = false; //LOCKEDSTATE
//     doc['PWR'] = true; // POWERSTATE
//     doc['UNT'] = true; // True = Celsius
//     doc['AIR'] = true; //BUBBLESSTATE
//     doc['GRN'] = doc['TMP'] === doc['TGT']; //HEATGRNSTATE
//     doc['RED'] = !doc['GRN']; // HEATREDSTATE
//     doc['FLT'] = 1; //PUMPSTATE
//     doc['TGT'] = getRandomTemperature();
//     doc['TMP'] = getRandomTemperature();
//     doc['CH1'] = ' ';
//     doc['CH2'] = ' ';
//     doc['CH3'] = ' ';
//     doc['JET'] = false; // JETSSTATE
//     doc['ERR'] = '';
//     doc['GOD'] = false; // GOD Mode

//     return doc;
// }
