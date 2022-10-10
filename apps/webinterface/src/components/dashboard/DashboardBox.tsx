import { PropsWithChildren } from 'react';


export function DashboardBox({ children }: PropsWithChildren) {
    return <div className="w-full rounded-xl bg-white p-3">{children}</div>;
}
