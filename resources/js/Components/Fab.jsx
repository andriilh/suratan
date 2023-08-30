import { Add } from '@mui/icons-material';
import React from 'react';
import Tooltip from './Tooltip';

export default function Fab({ tooltip = '', className, ...props }) {
    return (
        <div
            className={`group fixed bottom-12 right-12 z-50 transition-all ${className}`}
            {...props}
        >
            <Tooltip tooltip={tooltip}>
                <div className="rounded-full bg-gray-800 p-4 shadow-md shadow-gray-800/10 group-hover:bg-gray-50 group-hover:shadow-xl">
                    <Add className="text-gray-100 group-hover:text-gray-800" />
                </div>
            </Tooltip>
        </div>
    );
}
