import { PropsWithChildren } from 'react';


export function WeatherBox({ children }: PropsWithChildren) {
    return <div className="h-full w-32 rounded-xl bg-indigo-400 p-4">{children}</div>;
}
