import clsx from 'clsx';
import { DashboardBox } from '../DashboardBox';

type ControlWidgetProps = {
    label: string;
    active?: boolean;
    onClick?(newState: boolean): void;
};

export function ControlWidget({ label, active, onClick }: ControlWidgetProps) {
    // TODO Remove this when we make onClick mandatory
    function handleOnClick() {
        if (onClick) {
            onClick(!active);
        }
    }

    return (
        <DashboardBox data-testid="controlwidget">
            <div className="group mx-auto flex w-28 flex-col space-y-2 group-active:rounded-xl">
                <span className="text-center text-lg font-semibold uppercase">{label}</span>
                <button
                    className={clsx('h-24 rounded-xl text-center', active ? 'bg-green-100' : 'bg-red-100')}
                    onClick={() => handleOnClick()}
                >
                    <span className=" text-center text-4xl font-extrabold uppercase">{active ? 'On' : 'Off'}</span>
                </button>
            </div>
        </DashboardBox>
    );
}
