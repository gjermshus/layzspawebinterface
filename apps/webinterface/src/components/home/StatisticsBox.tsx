type StatisticsBoxProps = {
    value: string | number;
    description: string;
};

export function StatisticsBox({ value, description }: StatisticsBoxProps) {
    return (
        <div className='px-4 py-3 bg-white shadow rounded-lg overflow-hidden text-center w-full'>
            <dt className='text-sm font-medium text-gray-500 truncate'>{description}</dt>
            <dd className='mt-1 text-3xl tracking-tight font-semibold text-gray-900'>{value}</dd>
        </div>
    );
}
