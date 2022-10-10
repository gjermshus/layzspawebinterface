import { Button } from '../ui/Button';

export type ResetTimerProps = {
    description: string;
    onReset: () => void;
};

export function ResetTimer({ description, onReset }: ResetTimerProps) {
    return (
        <div className="flex flex-row align-middle">
            <span>{description}</span>
            <div className="ml-auto">
                <Button label="Reset" onClick={() => onReset()} />
            </div>
        </div>
    );
}
