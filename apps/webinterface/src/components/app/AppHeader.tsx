import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { NavigationMenu } from '../ui/NavigationMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faHamburger } from '@fortawesome/free-solid-svg-icons';

export function AppHeader() {
    // TODO Add color to currently active page
    return (
        <header>
            <Popover className="relative bg-indigo-600">
                {({ close }) => (
                    <>
                        <div className="mx-auto flex items-center justify-between px-4 py-6">
                            <div className="flex justify-start">
                                <div className="relative h-12 w-12">
                                    <img className="" src="/visualapproach.png" alt="" />
                                </div>
                            </div>
                            <span className="text-2xl font-semibold text-white">Lay-Z-Spa Module</span>
                            <div className="">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <FontAwesomeIcon icon={faHamburger} className="h-6 w-6" aria-hidden="true"  />
                                    {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                                </Popover.Button>
                            </div>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-200 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel focus className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition">
                                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="px-5 pt-5 pb-6">
                                        <div className="flex items-center justify-between">
                                            <div className="relative h-12 w-12">
                                                <img className="" src="/visualapproach.png" alt="" />
                                            </div>
                                            <span className="text-2xl font-semibold">Lay-Z-Spa Module</span>
                                            <div className="">
                                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close menu</span>
                                                    <FontAwesomeIcon icon={faClose} className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <NavigationMenu onClick={() => close()}></NavigationMenu>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </header>
    );
}
