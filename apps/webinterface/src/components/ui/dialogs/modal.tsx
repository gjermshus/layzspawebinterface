import { Dialog, Transition } from '@headlessui/react';
import { Fragment, PropsWithChildren, useState } from 'react';

interface IModalProps extends PropsWithChildren {
    isOpen: boolean;
    closeModal: () => void;
    description?: string;
    title?: string; // TODO Required
}

export function Modal({ isOpen, closeModal, title, description, children }: IModalProps) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    {title}
                                </Dialog.Title>
                                {description && (
                                    <Dialog.Description className="mt-2 text-sm text-gray-500">{description}</Dialog.Description>
                                )}

                                <div className="mt-4">{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export function useDialog() {
    const [isOpen, setIsOpen] = useState(false);

    function openDialog() {
        setIsOpen(true);
    }

    function closeDialog() {
        setIsOpen(false);
    }

    return { isOpen, openDialog, closeDialog };
}
