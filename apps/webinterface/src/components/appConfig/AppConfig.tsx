function TestSection() {
    return (
        <div className=" rounded-md bg-white p-4 text-[0.8125rem] leading-6 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
            <div className="font-semibold leading-5">Account</div>
            <div className="mt-2 leading-5 text-slate-500">
                Manage how information is displayed on your account.
            </div>
            <div className="mt-4 flex items-center border-t border-slate-400/20 py-3">
                <span className="w-2/5 flex-none">Language</span>
                <span className="">English</span>
                <span className="pointer-events-auto ml-auto font-medium text-indigo-600 hover:text-indigo-500">
                    Update
                </span>
            </div>
            <div className="flex items-center border-t border-slate-400/20 py-3">
                <span className="w-2/5 flex-none">Date format</span>
                <span className="">DD-MM-YYYY</span>
                <span className="ml-auto flex items-center font-medium text-indigo-600">
                    <span className="pointer-events-auto hover:text-indigo-500">
                        Update
                    </span>
                    <span className="mx-3 h-6 w-px bg-slate-400/20"></span>
                    <span className="pointer-events-auto hover:text-indigo-500">
                        Remove
                    </span>
                </span>
            </div>
            <div className="flex items-center border-t border-slate-400/20 py-3">
                <span>Automatic timezone</span>
                <span className="ml-auto">
                    <div className="pointer-events-auto h-6 w-10 rounded-full bg-indigo-600 p-1 ring-1 ring-inset ring-black/20 transition duration-200 ease-in-out">
                        <div className="h-4 w-4 translate-x-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out"></div>
                    </div>
                </span>
            </div>
            <div className="flex items-center border-t border-slate-400/20 pt-3">
                <span>Auto-update applicant data</span>
                <span className="ml-auto">
                    <div className="pointer-events-auto h-6 w-10 rounded-full bg-slate-900/10 p-1 ring-1 ring-inset ring-slate-900/5 transition duration-200 ease-in-out">
                        <div className="h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out"></div>
                    </div>
                </span>
            </div>
        </div>
    );
}

export function AppConfig() {
    <TestSection />
}