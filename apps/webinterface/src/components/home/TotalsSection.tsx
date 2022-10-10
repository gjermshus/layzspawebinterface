import { Section } from '../ui/Section';

type TotalsRowProps = {
    description: string;
    value: number;
};

function TotalsRow({ description, value }: TotalsRowProps) {
    return (
        <div className="grid grid-cols-[40%_50%_10%] align-middle">
            <div className="justify-self-start">{description}</div>
            <div className="justify-self-end">{value}</div>
        </div>
    );
}

export function TotalsSection() {
    return (
        <Section name="Totals">
            <div className="divide-y divide-dashed divide-gray-200">
                <TotalsRow description='Time' value={Date.now()} />
                <TotalsRow description='Heating Est.' value={Date.now()} />
                <TotalsRow description='Ready in (hours)' value={Date.now()} />
                <TotalsRow description='Uptime' value={Date.now()} />
                <TotalsRow description='Pump' value={Date.now()} />
                <TotalsRow description='Heating' value={Date.now()} />
                <TotalsRow description='Air' value={Date.now()} />
                <TotalsRow description='Hydrojets' value={Date.now()} />
                <TotalsRow description='Estimated cost' value={Date.now()} />
            </div>
        </Section>
    );
}
