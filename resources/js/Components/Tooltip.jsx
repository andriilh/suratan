import { Transition } from '@headlessui/react';
import React from 'react';
import { Fragment } from 'react';
import { useRef } from 'react';

export default function Tooltip({ children, tooltip }) {
    const tooltipRef = useRef(null);
    const container = useRef(null);
    return (
        <Transition
            show={true}
            as={Fragment}
            enter="ease-out duration-600"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
            <div
                ref={container}
                onMouseEnter={({ clientX }) => {
                    if (!tooltipRef.current || !container.current) return;
                    const { left } = container.current.getBoundingClientRect();

                    tooltipRef.current.style.left = clientX - left - 10 + 'px';
                }}
                className="group relative inline-block"
            >
                {children}
                {tooltip ? (
                    <span
                        ref={tooltipRef}
                        className="invisible absolute -top-10 mt-2 whitespace-nowrap rounded bg-gray-800 p-1 text-sm text-white opacity-0 transition group-hover:visible group-hover:opacity-100"
                    >
                        {tooltip}
                    </span>
                ) : null}
            </div>
        </Transition>
    );
}
