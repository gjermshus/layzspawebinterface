import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CommandMapping } from '../../models/sendCommand';
import { useSocketComamandSender } from '../../states/SendCommandContext';
import {
    airBubblesState,
    celsiusState,
    hydrojetsState,
    targetTemparatureState,
} from '../../states/unitStates';
import { Section } from '../ui/Section';

type SliderControlProps = {
    description: string;
    value?: number; // TODO Make this required
    onChange?(value: number): void; // TODO Make this required
};

// TODO The Grid should somehow auto-fill the middle column so hardcoded widths are avoided
function SliderControl({ description, value, onChange }: SliderControlProps) {
    return (
        <div className="grid grid-cols-[40%_50%_10%] align-middle">
            <div className="justify-self-start">{description}</div>
            <input
                className=""
                type="range"
                min={10}
                max={40}
                step="1"
                value={value}
                onChange={(changeValue) => onChange?.(parseInt(changeValue.target.value))}
            />
            <span className="justify-self-end font-semibold text-primary">{value}</span>
        </div>
    );
}

function TeperatureSlider() {
    const value = useRecoilValue(targetTemparatureState);
    const commandSender = useSocketComamandSender();
    const handleTemperatureChange = (newTemperature: number) => {
        commandSender({ key: CommandMapping.SetTargetTemperature, value: newTemperature });
        console.log('New temperature', newTemperature);
    };

    return <SliderControl description="Set temperature" value={value} onChange={handleTemperatureChange} />;
}

type SwitchControlProps = {
    description: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void; // TODO Make Mandatory
};

function SwitchControl({ description, checked, onChange }: SwitchControlProps) {
    return (
        <div className="grid grid-cols-[40%_50%_10%] align-middle">
            <div className="justify-self-start">{description}</div>
            <Switch
                checked={checked ?? false}
                onChange={(v: boolean) => onChange?.(v)}
                className={`${checked ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Enable notifications</span>
                <span className={`${checked ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white`} />
            </Switch>
        </div>
    );
}

function BubblesControl() {
    const [bubbles, setBubbles] = useRecoilState(airBubblesState);
    const sendCommand = useSocketComamandSender();
    const handeToggle = (newState: boolean) => {
        sendCommand({ key: CommandMapping.ToggleBubbles, value: newState ? 1 : 0 });
        setBubbles(newState);
    };

    return <SwitchControl description="Bubbles" checked={bubbles} onChange={handeToggle} />;
}

function HydroJetsControl() {
    const [hydroJets, setHydroJets] = useRecoilState(hydrojetsState);
    const commandSender = useSocketComamandSender();
    const handeToggle = (newState: boolean) => {
        commandSender({ key: CommandMapping.ToggleHydroJets, value: newState ? 1 : 0 });
        setHydroJets(newState);
    };

    return <SwitchControl description="Hydrojets" checked={hydroJets} onChange={handeToggle} />;
}

function PumpControl() {
    const [pump, setPump] = useState(false);
    const commandSender = useSocketComamandSender();
    const handeToggle = (newState: boolean) => {
        commandSender({ key: CommandMapping.TogglePump, value: newState ? 1 : 0 });
        setPump(newState);
    };

    return <SwitchControl description="Pump" checked={pump} onChange={handeToggle} />;
}

function HeaterControl() {
    const [heater, setHeater] = useState(false);
    const commandSender = useSocketComamandSender();
    const handeToggle = (newState: boolean) => {
        commandSender({ key: CommandMapping.ToggleHeater, value: newState ? 1 : 0 });
        setHeater(newState);
    };

    return <SwitchControl description="Heater" checked={heater} onChange={handeToggle} />;
}

function UnitControl() {
    const [isCelsius, setIsCelsius] = useRecoilState(celsiusState);
    const commandSender = useSocketComamandSender();
    const handeToggle = (newState: boolean) => {
        commandSender({ key: CommandMapping.ToggleUnit, value: newState ? 1 : 0 });
        setIsCelsius(newState);
    };

    return <SwitchControl description="Unit" checked={isCelsius} onChange={handeToggle} />;
}

export function ControlSection() {
    return (
        <Section name="Control">
            <TeperatureSlider />
            <SliderControl description="Set brightness" />
            <SliderControl description="Set ambient temp" />
            <div className="grid grid-cols-2 gap-1">
                <BubblesControl />
                <PumpControl />
                <HydroJetsControl />
                <HeaterControl />
                <UnitControl />
            </div>
        </Section>
    );
}
