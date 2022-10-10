import { PropsWithChildren } from 'react';

interface ISectionProps extends PropsWithChildren {
    name: string;
    description?: string;
}
export function Section({ name, description, children }: ISectionProps) {
    return (
        <div className="rounded-md bg-white p-4 text-sm leading-6 text-primary shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
            <div className="font-semibold leading-5">{name}</div>
            {description && (
                <div className="mt-2 leading-5 text-slate-500">
                    {description}
                </div>
            )}
            <div className='space-y-1'>{children}</div>
        </div>
    );
}
