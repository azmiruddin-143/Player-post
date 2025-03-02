import PropTypes from 'prop-types'
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'
import { Fragment } from 'react'
import QrCodeDetails from '../QrCodeDetails'

import { RxCross2 } from "react-icons/rx";
const QrCodeModal = ({ setIsEditModalOpen, isOpen, }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setIsEditModalOpen(false)}
            >
                <TransitionChild
                    as={Fragment}
                    enter='duration-0'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='duration-0'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-[#00000050]' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center  text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='duration-0'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='duration-0'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <DialogPanel className='w-full min-h-screen  transform overflow-hidden  bg-neutral p-3 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >

                                </DialogTitle>
                                <div onClick={() => setIsEditModalOpen(false)} >
                                    <RxCross2 className='text-[40px] p-2  bg-info-content text-primary-content rounded-full' />
                                </div>
                                <div className='mt-2 w-full'>
                                    <QrCodeDetails setIsEditModalOpen={setIsEditModalOpen} />
                                </div>

                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

QrCodeModal.propTypes = {
    setIsEditModalOpen: PropTypes.func,
    isOpen: PropTypes.bool,
}



export default QrCodeModal;
